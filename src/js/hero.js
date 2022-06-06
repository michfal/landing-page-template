import { gsap } from 'gsap';

const windowHeight = window.innerHeight;
const animateElements = document.querySelectorAll('.j-animate_onload');
const hero = document.querySelector('.hero');
hero.style.opacity = 0;

export function scrollPage() {
  window.scrollTo({ top: windowHeight, behavior: 'smooth' });
}

function animateHeaders(element) {
  let startPosition = -200;
  if (element.classList.contains('j-right')) {
    startPosition = 200;
  }
  gsap.from(element, { x: startPosition, duration: 1 });
}

export function handleOnloadAnimation() {
  gsap.to(hero, { opacity: 1, duration: 2 });
  gsap.from('.j-bottom', { y: 100, duration: 1 });
  animateElements.forEach((element) => {
    animateHeaders(element);
  });
}
