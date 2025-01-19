// Select elements
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");
const close = document.getElementById("close");

// Toggle mobile menu visibility
burger.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
  });
  
  close.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  })
 