const html = document.querySelector("html");
const float = document.querySelector(".float");
const sideBar = document.querySelector(".side");
const navBar = document.querySelector(".top-nav");
var fadeInElements = document.querySelectorAll(".fade-in-section");

const updateStyles = () => {
  if (innerWidth > 650) {
    if (sideBar.getBoundingClientRect().top < 70) {
      float.style.position = "fixed";
      float.style.top = "75px";
      float.style.right =
        (innerWidth - 17 - sideBar.getBoundingClientRect().right).toString() +
        "px";
      float.style.width =
        sideBar.getBoundingClientRect().width.toString() + "px";
    } else {
      float.style.position = "";
    }
  } else {
    float.style.position = "";
    float.style.top = "";
    float.style.right = "";
    float.style.width = "";
  }

  fadeInElements.forEach((element) => {
    if (elementIsVisibleInViewport(element)) {
      element.classList.add("is-visible");
    }
  });
};

const elementIsVisibleInViewport = (el, partiallyVisible = true) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

document.addEventListener("scroll", updateStyles, { passive: true });
setTimeout(updateStyles, 400);

const updateFadeInElements = () => {
  fadeInElements = document.querySelectorAll(".fade-in-section");
};
setInterval(updateFadeInElements, 1000);
