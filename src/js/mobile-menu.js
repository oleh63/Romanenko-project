const openBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".btn-menu-close");
const mobMenu = document.querySelector(".mob-menu");

function openMenu() {
  mobMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  mobMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Закриття по кліку на бекдроп
mobMenu.addEventListener("click", (e) => {
  if (e.target === mobMenu) {
    closeMenu();
  }
});

// Закриття по кліку на посилання
mobMenu.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    closeMenu();
  }
});
