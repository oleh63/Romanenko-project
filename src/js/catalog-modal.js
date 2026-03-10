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

  openModal(card.dataset.category);
});

function openModal(category) {
  gallery.innerHTML = "";

  const products = catalogData[category];

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

  history.pushState({ view: "modal" }, "");
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", () => history.back());
backdrop.addEventListener("click", () => history.back());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    history.back();
  }
});

window.addEventListener("popstate", (e) => {
  if (e.state?.view !== "modal" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
