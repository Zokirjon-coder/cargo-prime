document.addEventListener("DOMContentLoaded", function () {
  // gsap only onse animation
  // navigation img animation
  const imgTl = gsap.timeline();

  imgTl.from(
    ".gs_flipRight",
    {
      duration: 0.5,
      x: 30,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.3"
  );

  // navigation indicator animation
  const indicatorTl = gsap.timeline();

  indicatorTl.from(
    ".gs_flipLeft",
    {
      duration: 0.5,
      x: -30,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.3"
  );
  // header animation
  const headerTl = gsap.timeline();

  headerTl.from(
    ".gs_scalabe",
    {
      delay: 0.2,
      duration: 0.7,
      scale: 0,
      stagger: 0.2,
    },
    "-=0.3"
  );

  setTimeout(() => {
    VanillaTilt.init(document.querySelector(".card"), {
      max: 15,
      speed: 400,
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".card"));

    VanillaTilt.init(document.querySelector(".slide_conatiner"), {
      max: 15,
      speed: 400,
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".slide_conatiner"));

    // for slider

    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerView: "auto",
      centeredSlides: true,
      grubCursor: true,
      loop: true,
      observer: true,
      observerParents: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // scroll trigger

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });

    // counter
    gsap.from(".counting", {
      scrollTrigger: {
        trigger: ".counting",
        toggleActions: "restart none restart none",
      },
      textContent: 0,
      duration: 2,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
    });
  }, 500);
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  let x = 0,
    scale = 1,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    x = 0;
    y = -100;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = 0;
    y = 100;
  } else if (elem.classList.contains("gs_reveal_fromTransparent")) {
    x = 0;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromScale")) {
    x = 0;
    y = 0;
    scale = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, scale: scale, autoAlpha: 0 },
    {
      duration: 1.25,
      delay: 0.3,
      x: 0,
      y: 0,
      scale: 1,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}
