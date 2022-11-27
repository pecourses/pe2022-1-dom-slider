'use strict';

const slides = [
  {
    src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape1',
  },
  {
    src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape2',
  },
  {
    src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape3',
  },
  {
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape4',
  },
];

const [prevBtn, nextBtn] = document.querySelectorAll('button');
const sliderImg = document.querySelector('.sliderWrapper img');

try {
  const slider = new Slider(slides, 10);

  updateSlider(slider.currentSlide);

  prevBtn.onclick = prevBtnHandler;
  nextBtn.onclick = nextBtnHandler;

  function prevBtnHandler() {
    slider.decSlideIndex();
    updateSlider(slider.currentSlide);
  }

  function nextBtnHandler() {
    slider.incSlideIndex();
    updateSlider(slider.currentSlide);
  }

  function updateSlider(currentSlide) {
    sliderImg.src = currentSlide.src;
    sliderImg.alt = currentSlide.alt;

    sliderImg.onerror = () => {
      sliderImg.src = './../images/defaultSlide.jpeg';
    };
  }
} catch (e) {
  sliderImg.src = './../images/defaultSlide.jpeg';
}
