const block = document.querySelector(".block");
const step = 10;
const maxWidth = window.innerWidth - block.offsetWidth;
const maxHeight = window.innerHeight - block.offsetHeight;

const KEY_MAP = {
  ArrowRight: mooveRight,
  ArrowDown: mooveDown,
  ArrowLeft: mooveLeft,
  ArrowUp: mooveUp,
  Space: jump,
  ControlLeft: scale,
};

function mooveRight(e) {
  const deadline = block.offsetLeft + step;

  if (deadline > maxWidth) {
    block.style.left = block.offsetLeft - step * 2 + "px";
    stop();
  } else {
    block.style.left = block.offsetLeft + step + "px";
  }
 console.log(e.code);
}

function mooveLeft(e) {
  const deadline = block.offsetLeft + step;

  if (deadline <= step) {
    block.style.left = block.offsetLeft + step * 2 + "px";
    stop();
  } else {
    block.style.left = block.offsetLeft - step + "px";
  }
  console.log(e.code);
}

function mooveDown(e) {
  const deadline = block.offsetTop + step;

  if (deadline > maxHeight) {
    block.style.top = block.offsetTop - step * 2 + "px";
    stop();
  } else {
    block.style.top = block.offsetTop + step + "px";
  }
  console.log(e.code);
}

function mooveUp(e) {
  const deadline = block.offsetTop - step;

  if (deadline <= step) {
    block.style.top = block.offsetTop + step * 2 + "px";
    stop();
  } else {
    block.style.top = block.offsetTop - step + "px";
  }
  console.log(e.code);
}

function stop() {
  block.style.color = "red";
  block.textContent = "БЕМС!";

  setTimeout(() => {
    block.style.color = "";
    block.textContent = "";
  }, 2000);
}

function jump(e) {
  block.style.top = block.offsetTop - step + "px";
  block.style.background = "blue";

  setTimeout(() => {
    block.style.top = block.offsetTop + step + "px";
    block.style.background = "";
  }, 1000);

  console.log(e.code);
}

function scale(e) {
  block.style.transform = "scaleX(125%) scaleY(60%)";
  block.style.background = "blue";
  setTimeout(() => {
    block.style.background = "";
    block.style.transform = "";
  }, 1000);
  console.log(e.code);
}

document.addEventListener("keydown", (e) => KEY_MAP[e.code](e));
