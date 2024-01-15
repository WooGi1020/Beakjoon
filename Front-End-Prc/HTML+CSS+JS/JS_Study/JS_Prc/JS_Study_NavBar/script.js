const toggleOnBtn = document.querySelector(".toggle-btn-on");
const toggleOffBtn = document.querySelector(".toggle-btn-off");
const linkCont = document.querySelector(".link-container");
const bigLinkCont = document.querySelector(".big-link-container");

const toggleElements = () => {
    toggleOnBtn.classList.toggle("hidden");
    toggleOffBtn.classList.toggle("hidden");
    linkCont.classList.toggle("hidden");
    bigLinkCont.classList.toggle("hidden");
  };
  
  toggleOnBtn.addEventListener("click", toggleElements);
  toggleOffBtn.addEventListener("click", toggleElements);