function changeVideo(id) {
  const iframe = document.querySelector("#main-video iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
}

window.addEventListener("load", () => {
  new Swiper(".video-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    direction: "horizontal",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    breakpoints: {
      576: { slidesPerView: 4 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 6 },
      1200: { slidesPerView: 7 },
    }
  });
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    }
  });