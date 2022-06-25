const navbarMenu = document.querySelectorAll("ul.navbar>li>a"); //Обработчик Меню шапки

navbarMenu.forEach((item) => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const active = document.querySelector('.navbar .active')

    if (active) {
      active.classList.remove('active');
    }
    item.classList.add('active');
  });
});

const video = document.querySelector('video'); //Обработчик видео
const controls = document.querySelector('.controls');

const play =document.querySelector('.play');

controls.style.visibility = 'visible';

play.addEventListener('click',playPauseMedia);

function playPauseMedia() {
    if(video.paused) {
        play.setAttribute('data-icon', 'u');
        video.play();
    } else {
        play.setAttribute('data-icon', 'P');
        video.pause();
    }
}

const ratingStars = document.querySelectorAll('.rating_star'); // обработчик звезд
const ratingResult = document.querySelector('.rating_result');

ratingStars.forEach((item, index)=> {
  item.addEventListener('click', function () {

    let result = index+1+'/5';

    ratingResult.innerHTML = result
  }); 
});



// const ratingStars = [...document.getElementsByClassName(".rating>a")];
// const ratingResult = document.querySelector(".rating_result");

// printRatingResult(ratingResult);

// function executeRating(stars, result) {
//     const starClassActive = ".rating>a";
//     const starClassUnactive = ".rating>a";
//     const starsLength = stars.length;
//     let i;
//     stars.map((star) => {
//       star.onclick = () => {
//           i = stars.indexOf(star);

//           if (star.className.indexOf(starClassUnactive) !== -1) {
//             printRatingResult(result, i + 1);
//             for (i; i >= 0; --i) stars[i].className = starClassActive;
//           } else {
//             printRatingResult(result, i);
//             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
//           }
//       };
//     });
// }

// function printRatingResult(result, num = 0) {
//     result.textContent = `${num}/5`;
// }

// executeRating(ratingStars, ratingResult);