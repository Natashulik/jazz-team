const bannerContainer = document.querySelector(".banner__container");
const bannerTitle = document.querySelector(".banner__title");
const bannerSubtitle = document.querySelector(".banner__subtitle");
const boardBox = document.getElementById("banner__board-box");
const booksBox = document.getElementById("banner__books-box");
const schoolBox = document.getElementById("banner__school-box");
const shapesBox = document.getElementById("banner__shapes-box");

// title animation
let startPosition = -100;
let endPosition = (bannerContainer.offsetWidth - bannerTitle.offsetWidth) / 2;
let currentPosition = startPosition;
let requestId;

function animateTitle() {
  if (currentPosition < endPosition) {
    currentPosition += 2;
    bannerTitle.style.opacity = 1;
    bannerTitle.style.transform = `translateX(${currentPosition}%)`;
    requestId = requestAnimationFrame(animateTitle);
  } else {
    bannerTitle.style.transform = `translateX(${endPosition}%)`;
  }
}

// subtitle animation
let subtitleStartPosition = -bannerContainer.offsetHeight;
let subtitleEndPosition = 0;
let subtitleCurrentPosition = subtitleStartPosition;
let subtitleRequestId;

let subtitleStartFontSize = 14;
let subtitleEndFontSize = 20.53;
let subtitleCurrentFontSize = subtitleStartFontSize;

function animateSubtitle() {
  if (subtitleCurrentPosition < subtitleEndPosition) {
    bannerSubtitle.style.fontSize = `14px`;
    bannerSubtitle.style.fontWeight = `700`;

    if (subtitleCurrentPosition >= subtitleEndPosition - 10) {
      subtitleCurrentPosition += 3;
      subtitleCurrentFontSize += 0.1;
      bannerSubtitle.style.transition = "font-size 0.4s ease";
    } else {
      subtitleCurrentPosition += 20;
    }

    bannerSubtitle.style.transform = `translateY(${subtitleCurrentPosition}%)`;
    bannerSubtitle.style.fontSize = `${subtitleCurrentFontSize}`;
    subtitleRequestId = requestAnimationFrame(animateSubtitle);
  } else {
    bannerSubtitle.style.transform = `translateY(0%)`;
    bannerSubtitle.style.fontSize = `20.53px`;
    bannerSubtitle.style.fontWeight = `600`;
  }
}

animateSubtitle();

// picture animation
function animatePictureLeft(elem, posX, posY) {
  let rotation = 0;
  let direction = -1;
  let isAnimating = false;

  function animate() {
    if (rotation <= -45 && direction === -1) {
      direction = 1;
      setTimeout(animate, 200);
    } else if (rotation === 0 && direction === 1) {
      isAnimating = false;
      return;
    } else {
      rotation += 1 * direction;
      elem.style.transition = "font-size 1s ease-out";
      elem.style.transform = `rotate(${rotation}deg)`;
      elem.style.transformOrigin = `${posX} ${posY}`;
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function animatePictureRight(elem, posX, posY) {
  let rotation = 0;
  let direction = 1;
  let isAnimating = false;

  function animate() {
    if (rotation >= 45 && direction === 1) {
      direction = -1;
      setTimeout(animate, 200);
    } else if (rotation === 0 && direction === -1) {
      isAnimating = false;
      return;
    } else {
      rotation += 1 * direction;
      elem.style.transition = "font-size 1s ease-out";
      elem.style.transform = `rotate(${rotation}deg)`;
      elem.style.transformOrigin = `${posX} ${posY}`;
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

setTimeout(() => {
  animatePictureLeft(boardBox, "55%", "60%");
  animatePictureLeft(booksBox, "35%", "40%");
  animatePictureRight(schoolBox, "50%", "50%");
  animatePictureRight(shapesBox, "50%", "65%");
  animateTitle();
}, 800);
