// navbar
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const navList = document.getElementById("nav-list");
const content = document.getElementById("content");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

content.addEventListener("click", () => {
  navList.classList.add("hidden");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
});

// Parallax
const gateLeft = document.getElementById("gate-left");
const gateRight = document.getElementById("gate-right");
const treeLeft = document.getElementById("tree-left");
const treeRight = document.getElementById("tree-right");
const heading = document.getElementById("heading");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  treeLeft.style.translate = `${value < 800 ? -value * 0.6 : -800}px 0`;
  treeRight.style.translate = `${value < 800 ? value * 0.8 : 800}px 0`;
  heading.style.translate = `0 ${value < 800 ? value * 1 : 800}px`;
  gateRight.style.translate = `${value < 800 ? value * -0.2 : 800}px ${
    value < 800 ? value * 0.4 : 800
  }px`;
  gateLeft.style.translate = `${value < 800 ? value * 0.2 : 800}px ${
    value < 800 ? value * 0.4 : 800
  }px`;
});
