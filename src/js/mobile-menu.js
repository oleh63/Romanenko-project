const openBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".btn-menu-close");
const mobMenu = document.querySelector(".mob-menu");

function openMenu() {
  mobMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");

  history.pushState({ menu: true }, "");
}

function closeMenu() {
  mobMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");

  if (history.state?.menu) {
    history.back();
  }
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

window.addEventListener("popstate", () => {
  if (mobMenu.classList.contains("is-open")) {
    mobMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});
