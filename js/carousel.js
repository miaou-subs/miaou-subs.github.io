const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides[currentSlide].style.display = 'none';
  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

showSlide(0); // Show the first slide initially
