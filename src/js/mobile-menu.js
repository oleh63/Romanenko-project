const openBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".btn-menu-close");
const mobMenu = document.querySelector(".mob-menu");

openBtn.addEventListener("click", () => {
  mobMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobMenu.classList.remove("is-open");
  document.body.style.overflow = "";
});

mobMenu.addEventListener("click", (event) => {
  if (event.target === mobMenu) {
    mobMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});
