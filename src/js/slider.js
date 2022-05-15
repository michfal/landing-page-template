import { gsap } from 'gsap';

let clickedSlides = {
  current: 0,
  last: 1,
};

const buttons = document.querySelectorAll('.j-slider_button');
const images = document.querySelectorAll('.j-slide_image');
const textsLeft = document.querySelectorAll('.j-slide_txt_left');
const textsRight = document.querySelectorAll('.j-slide_txt_right');
console.log(images);

function animateObjects(current, next) {
  //animate out
  current.map((element) => {
    gsap.to(element, { duration: 0.5, opacity: 0, x: 100 });
  });
  // //animate in
  next.map((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0, x: -100 },
      { opacity: 1, scale: 1, x: 0, duration: 0.5 }
    );
  });
}

//sets current active slide and last one
function setClickedObject(value) {
  clickedSlides.last = clickedSlides.current;
  clickedSlides.current = value;
}

function highlightButton(clicked) {
  [...buttons].map((element) => element.classList.remove('select'));
  clicked.classList.add('select');
}

function getNodeIndex(nodeList, clicked) {
  let index = '';
  nodeList.forEach((e, i) => {
    if (e.innerHTML == clicked.innerHTML) index = i;
  });
  return index;
}

export function handleSliderButton(e) {
  const clicked = e.target;
  const clickedIndex = getNodeIndex(buttons, clicked);
  console.log(clickedIndex);
  if (clicked.classList.contains('slider__buttons_element')) {
    highlightButton(clicked);
    if (clickedIndex !== clickedSlides.current) {
      const current = [
        images[clickedSlides.current],
        textsLeft[clickedSlides.current],
        textsRight[clickedSlides.current],
      ];
      const next = [
        images[clickedIndex],
        textsLeft[clickedIndex],
        textsRight[clickedIndex],
      ];
      animateObjects(current, next);
      setClickedObject(clickedIndex);
    }
  }
}
