const END_DATE = "2023.12.31 23:59:59";

const timerBody = document.querySelector(".timer__body");
const daysCell = document.querySelector(".timer .days");
const hoursCell = document.querySelector(".timer .hours");
const minutesCell = document.querySelector(".timer .minutes");

const code = document.querySelector("#code");
const codeCopy = document.querySelector("#code-copy");

const scrollElements = document.querySelectorAll(".scroll-animated");

const timerRun = () => {
  const end = new Date(END_DATE);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let timerInterval;

  const zeroPrefix = (num) => (num > 9 ? `${num}` : `0${num}`);

  const renderTimer = () => {
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {
      clearInterval(timerInterval);
      timerBody.innerHTML = `<div class="square timer-end">Акцію завершено</div>`;
      return;
    }

    daysCell.innerHTML = Math.floor(distance / day);
    hoursCell.innerHTML = zeroPrefix(Math.floor((distance % day) / hour));
    minutesCell.innerHTML = zeroPrefix(Math.floor((distance % hour) / minute));
  };

  timerInterval = setInterval(renderTimer, 1000);
};

const copyPromocode = () => {
  const range = document.createRange();
  range.selectNode(code);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
};

const scrollAnimate = () => {
  if (scrollElements.length === 0) return;

  const windowHeight = window.innerHeight;

  scrollElements.forEach((elem) => {
    const elementTop = elem.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      elem.classList.add('show');
    }
  });
};

timerRun();
scrollAnimate();
window.addEventListener('scroll', scrollAnimate);
codeCopy.addEventListener("click", copyPromocode);
