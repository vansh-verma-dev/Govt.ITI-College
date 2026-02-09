const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

document.addEventListener("click", () => {
  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
});

navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

 

