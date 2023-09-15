let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("menu-container");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 1000); // Change slide every 3 seconds
}
