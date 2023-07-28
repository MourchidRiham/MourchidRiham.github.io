let slideIndex = 0;
const slides = document.getElementsByClassName("slide-img");

let touchStartX = 0;
let touchEndX = 0;
showSlides();

// La fonction pour changer les slides est renommée en "changeSlide"
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
    }

    slides[slideIndex - 1].classList.remove("hidden");
}

// Le reste du code JavaScript reste inchangé


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

