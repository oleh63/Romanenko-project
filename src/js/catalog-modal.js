import { catalogData } from "./catalog-data.js";

const catalogList = document.querySelector(".catalog-list");
const modal = document.querySelector(".catalog-modal");
const gallery = document.querySelector(".modal-gallery");
const closeBtn = document.querySelector(".modal-close");
const backdrop = document.querySelector(".catalog-modal-backdrop");

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
      <img src="${product.img}" alt="">
      <p class="modal-price">${product.price} ₴</p>
    `;

    gallery.append(li);
  });

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
