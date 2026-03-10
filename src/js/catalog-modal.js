import { catalogData } from "./catalog-data.js";
import { initLightbox } from "./lightbox.js";

const catalogList = document.querySelector(".catalog-list");
const modal = document.querySelector(".catalog-modal");
const gallery = document.querySelector(".modal-gallery");
const closeBtn = document.querySelector(".modal-close");
const backdrop = document.querySelector(".catalog-modal-backdrop");

initLightbox(gallery);

catalogList.addEventListener("click", (e) => {
  const card = e.target.closest(".catalog-item");
  if (!card) return;

  const category = card.dataset.category;
  openModal(category);
});

function openModal(category) {
  gallery.innerHTML = "";

  const products = catalogData[category];
  if (!products) return;

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("modal-item");

    li.innerHTML = `
      <img src="${product.img}" alt="${product.alt}">
      <p class="modal-price">${product.price} ₴</p>
    `;

    gallery.append(li);
  });

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";

  history.pushState({ modal: true }, "");
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", () => {
  closeModal();
  history.back();
});

backdrop.addEventListener("click", () => {
  closeModal();
  history.back();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
    history.back();
  }
});

window.addEventListener("popstate", () => {
  const lightbox = document.querySelector(".lightbox");

  if (lightbox && lightbox.classList.contains("is-open")) return;

  if (modal.classList.contains("is-open")) {
    closeModal();
  }
});
