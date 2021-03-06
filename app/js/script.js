$(document).on('click', 'ul li', function () {
  $('li').removeClass('is-active');
  $(this).addClass('is-active');
});
$(document).ready(function () {
  $('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    focusOnSelect: true,
    prevArrow:
      '<a class="slide-arrow prev-arrow"><i class="lni lni-chevron-left" style="font-size:32px;"></i></a>',
    nextArrow:
      '<a class="slide-arrow next-arrow"><i class="lni lni-chevron-right" style="font-size:32px;"></i></a>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.nav-button').click(function () {
    $('body').toggleClass('nav-open');
  });
  $('.button').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=4ZHp5KNXTPA',
    },
    type: 'iframe',
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1',
        },
      },
      srcAction: 'iframe_src',
    },
  });
  const accordionItemHeaders = document.querySelectorAll(
    '.accordion-item-header',
  );
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', (event) => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        '.accordion-item-header.active',
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle('active');
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle('active');
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains('active')) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + 'px';
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
});
let countDown = new Date('January 31, 2021 00:00:00').getTime();
let now = new Date().getTime();
let distance = (countDown - now) / 1000;
console.log(distance);
let x = setInterval(function () {
  let now_ = new Date().getTime();
  let distance_ = countDown - now_;
  distance = countDown - now;
  percent = (distance_ / distance) * 100;
  seconds = Math.floor((distance_ / 1000) % 60);
  minutes = Math.floor((distance_ / (1000 * 60)) % 60);
  hours = Math.floor((distance_ / (1000 * 60 * 60)) % 60);
  days = Math.floor((distance_ / (1000 * 60 * 60 * 24)) % 100);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  document.getElementById('day').innerText = days;
  document.getElementById('hour').innerText = hours;
  document.getElementById('minute').innerText = minutes;
  document.getElementById('second').innerText = seconds;

  if (distance_ < 0) {
    clearInterval(x);
    document.getElementById('days').innerText = '0';
    document.getElementById('hours').innerText = '0';
    document.getElementById('minutes').innerText = '0';
    document.getElementById('seconds').innerText = '0';

    document.getElementById('day').innerText = '0';
    document.getElementById('hour').innerText = '0';
    document.getElementById('minute').innerText = '0';
    document.getElementById('second').innerText = '0';
  }
}, 1000);

function increaseValue() {
  var value = parseInt(document.getElementById('theInput').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('theInput').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('theInput').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : '';
  value--;
  document.getElementById('theInput').value = value;
}
