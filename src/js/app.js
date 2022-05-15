import { scrollPage } from './hero';
import { handleSliderButton } from './slider.js';
import { handleScrollAnimation } from './scroll';
import '../scss/app.scss';

import './slider.js';

const sliderButtons = document.querySelector('.slider__buttons');
const heroButton = document.querySelector('.j-hero_button');

sliderButtons.addEventListener('click', handleSliderButton);
heroButton.addEventListener('click', scrollPage);
window.addEventListener('scroll', handleScrollAnimation);
