const sliderControl = document.querySelector('.slider-range__control');
const photos = document.querySelectorAll('.example__slider-item');
const sliderRange = document.querySelector('.slider-range');
const sliderRangeButtons = sliderRange.querySelectorAll('.slider-range__ending');

sliderControl.addEventListener('input', () => {
  photos[1].style.width = 100 - sliderControl.value + '%';
});

sliderRange.addEventListener('click', (evt) => {
  if (evt.target && evt.target.tagName === 'BUTTON') {
    if (evt.target === sliderRangeButtons[0]) {
      sliderControl.value -= 10;
    } else {
      let inputValue = sliderControl.value;
      sliderControl.value = Number(inputValue) + 10;
    }
    photos[1].style.width = 100 - sliderControl.value + '%';
  }
});
