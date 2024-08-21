let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // Trigger confetti on the 4th slide
  if (slideIndex === 4) {
    startConfetti();
  } else {
    stopConfetti();
  }
}

// Confetti functions
let confettiInterval;

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
  return confetti;
}

function startConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  confettiInterval = setInterval(() => {
    const confetti = createConfettiPiece();
    confettiContainer.appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }, 200);
}

function stopConfetti() {
  clearInterval(confettiInterval);
  const confettiContainer = document.querySelector('.confetti-container');
  while (confettiContainer.firstChild) {
    confettiContainer.removeChild(confettiContainer.firstChild);
  }
}

// Function to go back to index.html
function goBackToIndex() {
  window.location.href = 'index.html';  // Ensure that 'index.html' is correctly named and located in the same directory as 'slideshow.html'
}
