const searchBtn = document.querySelector(".search_btn");
const search_place = document.querySelector(".search_place");
const search_input = document.querySelector(".search_place input");
const links_place = document.querySelector(".links_place");
const search_btn = document.querySelector(".search_place img");
const call_btn = document.querySelector(".links_place .call");
const btn_place = document.querySelector(".btn_place");
const links = document.querySelector(".links");
const search_menu = document.querySelector(".search_menu");

search_input.addEventListener("input", (e) => {
  if (e.target.value.length > 0) search_place.querySelector("img").classList.remove("hidden");
  else if (!search_place.querySelector("img").classList.contains("hidden"))
    search_place.querySelector("img").classList.add("hidden");
});

search_menu.addEventListener("input", (e) => {
  if (e.target.value.length > 0) search_menu.querySelector("img").classList.remove("hidden");
  else if (!search_menu.querySelector("img").classList.contains("hidden"))
    search_menu.querySelector("img").classList.add("hidden");
});

function setHidden(element) {
  element.classList.contains("hidden")
    ? element.classList.remove("hidden")
    : element.classList.add("hidden");
}

function focusInput(element) {
  if (!element.parentElement.classList.contains("hidden")) element.focus();
}

searchBtn.addEventListener("click", () => {
  setHidden(search_place);
  setHidden(links_place);
  focusInput(search_input);
  searchBtn.classList.toggle("search_show");
  btn_place.classList.toggle("search_show");
  if (btn_place.classList.contains("search_show")) {
    btn_place.scrollTop = 100;
  } else {
    btn_place.scrollTop = 0;
  }
});

call_btn.addEventListener("click", () => {
  call_btn.classList.toggle("search_show");
  if (call_btn.classList.contains("search_show")) {
    links.scrollTop = 100;
  } else {
    links.scrollTop = 0;
  }
});

// on scroll

const wrapper = document.querySelector(".wrapper");
const sections = document.querySelectorAll(".wrapper > section");
const navbtns = document.querySelectorAll(".navigation .nav_btn");

wrapper.addEventListener("scroll", (e) => {
  const scrollY = e.srcElement.scrollTop;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute("id");
      navbtns.forEach((btn) => {
        if (btn.getAttribute("title") === sectionId) {
          navbtns.forEach((button) => button.classList.remove("active"));
          btn.classList.add("active");
        }
      });
    }
  });
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  grubCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 ymaps.ready(init);
 function init() {
   var myMap = new ymaps.Map("map", {
     center: [55.76, 37.64],
     zoom: 7,
   });
 }

//  floating menu settings
 const float_menu = document.querySelector(".float_menu");
 const hamburger_btn = document.querySelector(".hamburger_btn");
 const menu_close = document.querySelector(".menu_close");
 const float_menus = float_menu.querySelectorAll(".menu_item");


 hamburger_btn.addEventListener("click", () => {
   float_menu.classList.add("opened");
 });

 float_menu.addEventListener("click", e=>{
   e.stopPropagation()
 })

 const closeMenu=()=>{
   float_menu.classList.remove("opened")
 }

 menu_close.addEventListener("click", (e)=>{
   e.stopPropagation();
   closeMenu()
  });

float_menus.forEach(menu => {
  menu.addEventListener("click", closeMenu)
});