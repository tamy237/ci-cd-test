// Select elements
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");
const close = document.getElementById("close");

// Toggle mobile menu visibility
burger.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
    mobileNav.classList.remove("-translate-x-full"); // Slide in
  });
  
// Hide the mobile nav with slide-out effect
close.addEventListener("click", () => {
  mobileNav.classList.add("-translate-x-full"); // Slide out
  mobileNav.classList.remove("translate-x-0");
});