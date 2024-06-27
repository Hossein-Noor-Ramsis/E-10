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
const hill1 = document.getElementById("hill1");
const hill3 = document.getElementById("hill5");
const hill4 = document.getElementById("hill4");
const heading = document.getElementById("heading");
const leaf = document.getElementById("leaf");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  hill1.style.translate = `0 ${value < 800 ? value * 0.4 : 800}px`
  hill3.style.translate = `${value < 800 ? value * 0.6 : 800}px 0`
  hill4.style.translate = `${value < 800 ? -value * 0.8 : -800}px 0`
  heading.style.translate = `0 ${value < 800 ? value : 800}px`
  leaf.style.translate = `${value < 800 ? value : 800}px 0`
});
