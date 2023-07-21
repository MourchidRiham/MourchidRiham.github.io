let slideIndex = 0;
const slides = document.getElementsByClassName("menu-container");


showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
  if (touchEndX < touchStartX) {
    // Swipe left
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  } else if (touchEndX > touchStartX) {
    // Swipe right
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
  }


  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("touchstart", function (event) {
  touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].screenX;
  handleGesture();
});
