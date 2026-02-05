const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-foot");
const links = document.querySelectorAll(".nav-foot a");

/* open close button */
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

/* close when link clicked */
links.forEach(link=>{
  link.addEventListener("click",()=>{
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* outside click close */
document.addEventListener("click",(e)=>{
  if(!nav.contains(e.target) && !menuBtn.contains(e.target)){
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
