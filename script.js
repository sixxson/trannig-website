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
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector("#default-carousel");
  const items = document.querySelectorAll("#default-carousel > div");
  const indicators = document.querySelectorAll("#slider-indicators p");
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  let index = 0;
  let intervalId;

  // setup style cho track
  track.style.display = "flex";
  track.style.transition = "transform 0.5s ease";

  // setup style cho item
  items.forEach((item) => {
    item.style.flex = "0 0 100%"; // mỗi slide chiếm 100%
  });

  function showSlide(i) {
    index = i;
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    indicators.forEach((ind, idx) => {
      if (idx === i) {
        ind.classList.add("border-[#BF0006]");
      } else {
        ind.classList.remove("border-[#BF0006]");
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % items.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
  }

  nextBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    nextSlide();
    autoPlay();
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    prevSlide();
    autoPlay();
  });

  indicators.forEach((ind, i) => {
    ind.addEventListener("click", () => {
      clearInterval(intervalId);
      showSlide(i);
      autoPlay();
    });
  });

  function autoPlay() {
    intervalId = setInterval(nextSlide, 3000);
  }

  // khởi tạo
  showSlide(index);
  autoPlay();
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
