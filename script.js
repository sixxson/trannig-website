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
  const items = document.querySelectorAll("#default-carousel > div"); // item1..item4
  const indicators = document.querySelectorAll("#slider-indicators p");
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  let index = 0;
  let isAnimating = false;
  let intervalId;

  // Thêm hiệu ứng transition cho các slide
  items.forEach((item) => {
    item.style.transition = "opacity 0.5s";
    item.style.position = "absolute";
    item.style.top = 0;
    item.style.left = 0;
    item.style.width = "100%";
  });

  function showSlide(i) {
    if (isAnimating) return;
    isAnimating = true;

    items.forEach((item, idx) => {
      if (idx === i) {
        item.style.opacity = 1;
        item.style.zIndex = 1;
        item.classList.remove("hidden");
      } else {
        item.style.opacity = 0;
        item.style.zIndex = 0;
        setTimeout(() => item.classList.add("hidden"), 500);
      }
    });

    indicators.forEach((ind, idx) => {
      if (idx === i) {
        ind.classList.add("border-[#BF0006]");
      } else {
        ind.classList.remove("border-[#BF0006]");
      }
    });

    setTimeout(() => {
      isAnimating = false;
    }, 500);
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
      index = i;
      showSlide(index);
      autoPlay();
    });
  });

  function autoPlay() {
    intervalId = setInterval(nextSlide, 3000);
  }

  // Khởi tạo
  items.forEach((item, idx) => {
    if (idx !== index) {
      item.style.opacity = 0;
      item.classList.add("hidden");
    } else {
      item.style.opacity = 1;
      item.classList.remove("hidden");
    }
    item.style.zIndex = idx === index ? 1 : 0;
  });
  showSlide(index);
  autoPlay();
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(document.querySelectorAll(".carousel-item"));
  const prevBtn = document.querySelector(".btn.prev");
  const nextBtn = document.querySelector(".btn.next");
  let current = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function updateCarousel() {
    const visible = getVisibleCount();
    const itemWidth = items[0].offsetWidth;
    if (current > items.length - visible) current = items.length - visible;
    if (current < 0) current = 0;
    let translateX = current * itemWidth;
    track.style.transform = `translateX(-${current * itemWidth}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= items.length - visible;
    prevBtn.style.opacity = prevBtn.disabled ? 0.5 : 1;
    nextBtn.style.opacity = nextBtn.disabled ? 0.5 : 1;
  }

  nextBtn.addEventListener("click", () => {
    const visible = getVisibleCount();
    if (current < items.length - visible) {
      current++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});

const btn = document.getElementById("scrollBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
