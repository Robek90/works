document.addEventListener('DOMContentLoaded', function() {
  const slideContainer = document.querySelector('.slider');
  const sliderText = document.querySelector('.slider--text');
  const btnLeft = document.querySelector('.slider__btn-left');
  const btnRight = document.querySelector('.slider__btn-right');

  const sliderImages = [
    {
      src: './images/main_carousel/2.jpg',
    },
    {
      src: './images/main_carousel/3.jpg',
    },
    {
      src: './images/main_carousel/4.jpg',
    },
    {
      src: './images/main_carousel/5.jpg',
    },
  ];

  window.addEventListener("resize", function () {
    let width = window.innerWidth;
    startSlider(width);
  });

  let slideCounter = 0;

  const startSlider = (width) => {
    if (width<1000){
      slideContainer.style.backgroundImage = `url(${sliderImages[1].src})`;
    } else {
      slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
    }
  };

  startSlider();

  btnRight.addEventListener('click', function() {
    if (slideCounter === sliderImages.length - 1) {
      slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
      slideCounter = -1;

      slideContainer.classList.add('fadeIn');
      setTimeout(() => {
        slideContainer.classList.remove('fadeIn');
      }, 1000);
    }
    slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;
    slideCounter++;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  });

  btnLeft.addEventListener('click', function() {
    if (slideCounter === 0) {
      slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[sliderImages.length - 1].src})`;
      slideCounter = sliderImages.length;
      slideContainer.classList.add('fadeIn');
      setTimeout(() => {
        slideContainer.classList.remove('fadeIn');
      }, 1000);
    }

    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter - 1].src})`;
    slideCounter--;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  });
})

  // document.addEventListener('DOMContentLoaded', startSlider);