export function initLightbox(gallery) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const backdrop = document.querySelector(".lightbox-backdrop");

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("is-open");

    history.pushState({ view: "lightbox" }, "");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }

  gallery.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;

    openLightbox(img.src);
  });

  backdrop.addEventListener("click", () => {
    history.back();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      history.back();
    }
  });

  window.addEventListener("popstate", (e) => {
    if (
      e.state?.view !== "lightbox" &&
      lightbox.classList.contains("is-open")
    ) {
      closeLightbox();
    }
  });
}
