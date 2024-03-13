const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 1;
const slideWidth = images[0].clientWidth;

setInterval(() => {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === images.length) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(0px)`;
      counter = 1;
    }, 500);
  }
}, 3000);
