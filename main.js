const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-foot");
const links = document.querySelectorAll(".nav-foot a");

 
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

 
links.forEach(link=>{
  link.addEventListener("click",()=>{
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

 
document.addEventListener("click",(e)=>{
  if(!nav.contains(e.target) && !menuBtn.contains(e.target)){
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
