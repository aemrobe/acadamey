const menuBar = document.querySelector(".menu-bar");
const navBar = document.querySelector(".navbar__list");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
let curSlide = 0;
const maxLength = slides.length;

//function
//showNavbar
const showNavbar = function () {
  line_1.classList.add("rotate-line-1");
  line_2.classList.add("vanish-line-2");
  line_3.classList.add("rotate-line-3");
  navBar.classList.remove("hidden");
};

//removeNavbar
const removeNavbar = function () {
  line_1.classList.remove("rotate-line-1");
  line_2.classList.remove("vanish-line-2");
  line_3.classList.remove("rotate-line-3");
  navBar.classList.add("hidden");
};

removeNavbar();

menuBar.addEventListener("click", function () {
  if (navBar.classList.contains("hidden")) {
    showNavbar();
  } else {
    removeNavbar();
  }
});

//goToslide
const goToSlide = function (curSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};

//createDots
const createDots = function () {
  slides.forEach((_, i) => {
    {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    }
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

goToSlide(0);
createDots();
activateDots(0);

//nextSlide
const nextSlide = function () {
  if (curSlide === maxLength - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDots(curSlide);
};

//prevSlide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxLength - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDots(curSlide);
};

const slideShow = setInterval(nextSlide, 3000);

btnRight.addEventListener("click", nextSlide);
btnRight.addEventListener("click", function () {
  clearInterval(slideShow);
});

btnLeft.addEventListener("click", prevSlide);
btnLeft.addEventListener("click", function () {
  clearInterval(slideShow);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
    clearInterval(slideShow);
  }
  if (e.key === "ArrowRight") {
    nextSlide();
    clearInterval(slideShow);
  }
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;

    activateDots(slide);
    goToSlide(slide);
    clearInterval(slideShow);
  }
});
