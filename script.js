const header = document.getElementsByClassName("header")[0];
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("bg-[#801618]");
    header.classList.remove("header-bg");
  } else {
    header.classList.remove("bg-[#801618]");
    header.classList.add("header-bg");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".btn.prev");
  const nextBtn = document.querySelector(".btn.next");

  let index = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 20; // 20 = gap
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  // Swipe trên mobile
  let startX = 0;
  track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  track.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextBtn.click();
    if (endX - startX > 50) prevBtn.click();
  });
});

const btn = document.getElementById("scrollBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const vision = new Swiper(".visionSwiper", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: { crossFade: true },
    rewind: true,
    loopedSlides: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        const texts = [
          "Cam kết mang lại kết quả tối ưu",
          "Mang đến giải pháp tùy chỉnh",
          "Tạo dựng môi trường làm việc hiệu quả",
          "Tuân thủ các tiêu chuẩn về môi trường, sức khỏe và an toàn",
        ];
        return (
          '<p class="' + className + '">' + texts[index % texts.length] + "</p>"
        );
      },
    },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    speed: 800,
    keyboard: { enabled: true },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // desktop
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scroll = new Swiper(".scrollSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    speed: 800,
    keyboard: { enabled: true },
  });
});

// Toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const menuIcon = menuBtn.querySelector(".menu_icon");
  const mobileNav = document.getElementById("mobileNav");

  menuBtn.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mobileNav.classList.toggle("show");
  });
});
