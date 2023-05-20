const html = document.querySelector("html");
const float = document.querySelector(".float");
const sideBar = document.querySelector(".side");
const navBar = document.querySelector(".top-nav");

//Intializations
if (html.scrollTop < 4) {
  navBar.classList.remove("opaque");
} else {
  navBar.classList.add("opaque");
}

console.log(navigator);

const updateStyles = () => {
  if (html.scrollTop < 4) {
    navBar.classList.remove("opaque");
  } else {
    navBar.classList.add("opaque");
  }
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
};

document.addEventListener("scroll", updateStyles, { passive: true });
setTimeout(updateStyles, 400);
