// get btn from html
const btn = document.querySelector(".btn");

// listen for click event
btn.onclick = function (event) {
  console.log(event.type, event.clientX, event.clientY);

  // create span element
  const span = document.createElement("span");

  // append span to the button
  document.querySelector("button").append(span);

  // // get position of X
  let x = event.clientX - event.target.offsetLeft;
  // // // // get position of Y
  let y = event.clientY - event.target.offsetTop;

  // //     // set left/top property the span element
  span.style.left = x + "px";
  span.style.top = y + "px";

  // //     // remove span element after some delay, e.g. 300ms
  setTimeout(() => {
    span.remove(); // correct
  }, 3000);
};
