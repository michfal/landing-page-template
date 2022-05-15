import { gsap } from 'gsap';
const scrollElements = document.querySelectorAll('.j-scroll');

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

function elementInView(el, percentageScroll = 100) {
  const elementTop = el.getBoundingClientRect().top;
  //return true if element scrolls by the percentage into the page
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
}

function animatedCheck(element) {
  return element.dataset.animated == 'none';
}

function animateScrollElement(element) {
  let startPosition = -100;

  if (element.classList.contains('j-right')) {
    startPosition = 100;
  }
  gsap.fromTo(
    element,
    { opacity: 0, x: startPosition },
    { opacity: 1, x: 0, duration: 1 }
  );
}

export function handleScrollAnimation() {
  scrollElements.forEach((scrollElement) => {
    if (elementInView(scrollElement, 70) && animatedCheck(scrollElement)) {
      animateScrollElement(scrollElement);
      scrollElement.dataset.animated = 'animated';
    }
  });
}
