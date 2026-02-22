const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

const Username = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');


menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

function submit(){
  const nameinput = Username.value.trim();
  const emailinput = email.value.trim();
  const msginput =  msg.value.trim();
}
