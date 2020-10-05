$(document).on('click', 'ul li', function() {
    $('li').removeClass('is-active');
    $(this).addClass('is-active');
})
let countDown = new Date('December 31, 2020 00:00:00').getTime();
let now = new Date().getTime();
let distance = (countDown - now) / 1000;
console.log(distance);
let x = setInterval(function() {
    let now_ = new Date().getTime();
    let distance_ = (countDown - now_);
    distance = (countDown - now);
    percent = (distance_ / distance * 100);
    seconds = Math.floor(distance_ / 1000 % 60);
    minutes = Math.floor(distance_ / (1000 * 60) % 60);
    hours = Math.floor(distance_ / (1000 * 60 * 60) % 60);
    days = Math.floor(distance_ / (1000 * 60 * 60 * 24) % 100);


    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}, 1000);