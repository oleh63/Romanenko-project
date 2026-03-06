export function initLightbox(gallery) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

  if (!lightbox || !lightboxImg || !lightboxBackdrop) return;

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("is-open");

    history.pushState({ lightbox: true }, "");
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

  lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  window.addEventListener("popstate", () => {
    if (lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
