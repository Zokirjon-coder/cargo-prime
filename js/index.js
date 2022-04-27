const searchBtn = document.querySelector('.search_btn');
const search_place = document.querySelector('.search_place');
const search_input = document.querySelector('.search_place input');
const links_place = document.querySelector('.links_place');
const search_btn = document.querySelector('.search_place img');
const call_btn = document.querySelector('.links_place .call');
const btn_place = document.querySelector('.btn_place');
const links = document.querySelector('.links');
const search_menu = document.querySelector('.search_menu');

search_input.addEventListener('input', (e) => {
  if (e.target.value.length > 0)
    search_place.querySelector('img').classList.remove('hidden');
  else if (!search_place.querySelector('img').classList.contains('hidden'))
    search_place.querySelector('img').classList.add('hidden');
});

search_menu.addEventListener('input', (e) => {
  if (e.target.value.length > 0)
    search_menu.querySelector('img').classList.remove('hidden');
  else if (!search_menu.querySelector('img').classList.contains('hidden'))
    search_menu.querySelector('img').classList.add('hidden');
});

function setHidden(element) {
  element.classList.contains('hidden')
    ? element.classList.remove('hidden')
    : element.classList.add('hidden');
}

function focusInput(element) {
  if (!element.parentElement.classList.contains('hidden')) element.focus();
}

searchBtn.addEventListener('click', () => {
  setHidden(search_place);
  setHidden(links_place);
  focusInput(search_input);
  searchBtn.classList.toggle('search_show');
  btn_place.classList.toggle('search_show');
  if (btn_place.classList.contains('search_show')) {
    btn_place.scrollTop = 100;
  } else {
    btn_place.scrollTop = 0;
  }
});

call_btn.addEventListener('click', () => {
  call_btn.classList.toggle('search_show');
  if (call_btn.classList.contains('search_show')) {
    links.scrollTop = 100;
  } else {
    links.scrollTop = 0;
  }
});

// on scroll

const wrapper = document.querySelector('.wrapper');
const sections = document.querySelectorAll('.wrapper > section');
const navbtns = document.querySelectorAll('.navigation .nav_btn');
const footerHeight = wrapper.querySelector('footer').scrollHeight;
const wrapperHeight = wrapper.scrollHeight;
const chatBox = document.querySelector('.chat');
document.addEventListener('scroll', (e) => {
  const scrollY = e.srcElement.scrollingElement.scrollTop;
  console.log(footerHeight);
  if (wrapperHeight - footerHeight * 2.5 < scrollY) {
    chatBox.style = 'opacity: 0';
  } else {
    chatBox.style = 'opacity: 1';
  }

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      navbtns.forEach((btn) => {
        if (btn.getAttribute('data-title') === sectionId) {
          navbtns.forEach((button) => button.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    }
  });
});

//  floating menu settings
const float_menu = document.querySelector('.float_menu');
const hamburger_btn = document.querySelector('.hamburger_btn');
const menu_close = document.querySelector('.menu_close');
const float_menus = float_menu.querySelectorAll('.menu_item');

hamburger_btn.addEventListener('click', () => {
  float_menu.classList.add('opened');
});

float_menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

const closeMenu = () => {
  float_menu.classList.remove('opened');
};

menu_close.addEventListener('click', (e) => {
  e.stopPropagation();
  closeMenu();
});

float_menus.forEach((menu) => {
  menu.addEventListener('click', closeMenu);
});

// slider trucks
const prevBtn = document.querySelector('.slidenavBtns .prev');
const nextBtn = document.querySelector('.slidenavBtns .next');
const slide = document.querySelector('.slider_container .images');
const params = document.querySelector('.slider_container .params');
const numberSlide = document.querySelector('.numberSlide .number');
const numberLenght = document.querySelector('.numberSlide .length');

// images
// const img1 = './assets/images/img1.png';
// const img2 = './assets/images/img2.png';
// const img3 = './assets/images/img3.png';

const dataSlider = [
  {
    id: 1,
    // image: img1,
    param: [
      { id: 1, param: 'Governed at 70 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
  },
  {
    id: 2,
    // image: img2,
    param: [
      { id: 1, param: 'Governed at 70 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
  },
  {
    id: 3,
    // image: img3,
    param: [
      { id: 1, param: 'Governed at 70 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
  },
];

function setImageSlide(data) {
  const images = slide.querySelectorAll('img');
  const { id, param } = data;
  const paragraphs = params.querySelectorAll('p');
  const timeLine = gsap.timeline();
  let img = null;
  images.forEach((image) => {
    let disabled = image.getAttribute('disabled');
    if (disabled === 'false') {
      img = image;
    }
  });

  numberSlide.innerHTML = String(id);
  gsap.fromTo(
    img,
    {
      x: 0,
      opacity: 1,
    },
    {
      opacity: 0,
      x: -100,
      duration: 0.5,
    }
  );
  timeLine.fromTo(
    paragraphs,
    {
      x: 0,
      opacity: 1,
    },
    {
      opacity: 0,
      x: 100,
      stagger: 0.1,
      duration: 0.5,
    },
    '-=.2'
  );

  setTimeout(() => {
    paragraphs.forEach((paragraph) => (paragraph.innerHTML = ''));
    param.forEach(({ param }, index) => {
      paragraphs[index].innerHTML += param;
    });
    images.forEach((image, index) => {
      if (id === index + 1) {
        image.setAttribute('disabled', 'false');
        img = image;
      } else image.setAttribute('disabled', 'true');
    });

    gsap.fromTo(
      img,
      {
        x: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
    timeLine.fromTo(
      paragraphs,
      {
        x: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
      },
      '-=.2'
    );
  }, 900);
}

const slideCheck = (index) => {
  const lastIndex = dataSlider.length - 1;
  if (index < 0) {
    return lastIndex;
  }
  if (index > lastIndex) {
    return 0;
  }
  return index;
};

let n = 0;

setImageSlide(dataSlider[n]);

const setSlide = () => {
  n = slideCheck(++n);
  setImageSlide(dataSlider[n]);
};

const intervalSlide = setInterval(setSlide, 10000);

const onChangeSlide = (change) => {
  if (change === 'next') {
    n++;
  } else {
    n--;
  }
  n = slideCheck(n);
  setImageSlide(dataSlider[n]);
};

prevBtn.addEventListener('click', () => {
  onChangeSlide('prev');
  clearInterval(intervalSlide);
});
nextBtn.addEventListener('click', () => {
  onChangeSlide('next');
  clearInterval(intervalSlide);
});
