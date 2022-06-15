// MENU TOGGLER
let closeI = document.querySelector(".close");
let navUL = document.querySelector(".nav-ul");
let hamburger = document.querySelector(".hamburger");

// Logic
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.add("hide");
  closeI.classList.add("show");
});
closeI.addEventListener("click", () => {
  navUL.classList.remove("show");
  hamburger.classList.remove("hide");
  closeI.classList.remove("show");
});

// animate
let closeModal = document.querySelector(".close-modal");
let btn = document.querySelector(".search");
let modal = document.querySelector(".modal");

btn.addEventListener("click", openPoup);
closeModal.addEventListener("click", closePoup);

function openPoup() {
  modal.style.display = "block";
}
function closePoup() {
  modal.style.display = "none";
}

//Page animtion
AOS.init({
  duration: 1000,
});

// Scrol to top
// Scrol to top
// Scrol to top
let scrol = document.querySelector(".scrol");

//
window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 700) {
    scrol.classList.add("show-s");
  } else {
    scrol.classList.remove("show-s");
  }
};

scrol.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Toggle current class
let ulLis = document.querySelectorAll(".nav-ul li a");
let lisArray = Array.from(ulLis);

//
lisArray.forEach((li) => {
  li.addEventListener("click", (e) => {
    lisArray.forEach((ele) => {
      ele.classList.remove("current");
    });
    e.currentTarget.classList.add("current");
  });
});
