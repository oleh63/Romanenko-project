const track = document.querySelector(".slider-track");

const TOTAL_SLIDES = 10;

function createSlides() {
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const li = document.createElement("li");
    li.classList.add("slide");

    li.innerHTML = `
      <picture>
        <source 
          srcset="/img/reviews/desktop/${i}.webp"
          media="(min-width:1200px)" />
        <source 
          srcset="/img/reviews/tablet/${i}.webp"
          media="(min-width:720px)" />
        <img 
          src="/img/reviews/mobile/${i}.webp"
          alt="Відгук нареченої ${i}" />
      </picture>
    `;

    track.appendChild(li);
  }
}

createSlides();

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
  if (window.innerWidth >= 720) return 4;
  return 2;
}

function updateSlider() {
  slidesPerView = getSlidesPerView();

  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  updateButtons();
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= slides.length - slidesPerView;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - slidesPerView) {
    currentIndex += slidesPerView;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= slidesPerView;
    updateSlider();
  }
});

window.addEventListener("resize", () => {
  currentIndex = 0; // скидаємо щоб не було глюків
  updateSlider();
});

updateSlider();

let startX = 0;
let endX = 0;
let isDragging = false;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  endX = e.touches[0].clientX;
});

track.addEventListener("touchend", () => {
  if (!isDragging) return;

  const diff = startX - endX;

  if (diff > 50 && currentIndex < slides.length - slidesPerView) {
    currentIndex += slidesPerView;
  }

  if (diff < -50 && currentIndex > 0) {
    currentIndex -= slidesPerView;
  }

  updateSlider();
  isDragging = false;
});
