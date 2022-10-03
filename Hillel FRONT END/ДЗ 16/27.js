// необходимо реализовать функцию getTimeRemaining, которая на вход будет
//принимать дату дедлайна. и возсращать объект вида, приведенного ниже:

function getTimeRemaining(endtime) {
  // Решение
  var timeLeft = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((timeLeft / 1000) % 60);
  var minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  return {
        days,
        hours,
        minutes,
        seconds,
        timeLeft
};
}

//   необходимо реализовать функцию render,
//которая будет обновлять информацию в html тегах

const DEADLINE = "2022-08-23T16:15:00.000Z";

function render() {
  const time = getTimeRemaining(DEADLINE);
  // Решение
  let daysSpan = document.querySelector(".days");
  let hoursSpan = document.querySelector(".hours");
  let minutesSpan = document.querySelector(".minutes");
  let secondsSpan = document.querySelector(".seconds");

  daysSpan.innerHTML = time.days;
  hoursSpan.innerHTML = time.hours;
  minutesSpan.innerHTML = time.minutes;
  secondsSpan.innerHTML = time.seconds;

  if (time.ms <= 0) {
    clearInterval(timeinterval);
  }
}
render();
  let timeinterval = setInterval(render, 1000);

