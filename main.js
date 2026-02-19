const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});
