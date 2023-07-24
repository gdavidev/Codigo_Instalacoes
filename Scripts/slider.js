let slideIndex = 1;
showSlides(slideIndex);
setInterval(plusSlides, 5000, 1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider_obj");
    let dots = document.getElementsByClassName("slider_dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {   
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}