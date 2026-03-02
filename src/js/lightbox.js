export function initLightbox(gallery) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

  if (!lightbox || !lightboxImg || !lightboxBackdrop) return;

  gallery.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;

    lightboxImg.src = img.src;
    lightbox.classList.add("is-open");
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }

  // ✅ обробник на клік по фоні
  lightboxBackdrop.addEventListener("click", closeLightbox);

  // ✅ закриття по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
