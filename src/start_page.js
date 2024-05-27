document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});

window.onload = function() {
    document.getElementById('hi-text').className = 'visible';
};
var textElement = document.getElementsByClassName('name-animataded')[0];

textElement.addEventListener('animationend', function(event) {
    if (event.animationName === 'typing') {
        textElement.classList.add('no-cursor');
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    //slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },

      950: {
        slidesPerView: 3,
      }
    }
  });