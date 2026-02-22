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
 

function submit(){
    const Username = document.getElementById('name').value.trim();   
const email = document.getElementById('email').value.trim();
const msg = document.getElementById('msg').value.trim();
console.log("Name: "+ Username);
console.log("Email" + email);
console.log('mag: ' + msg);
}
