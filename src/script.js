// Select elements
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");
const close = document.getElementById("close");

// Toggle mobile menu visibility
burger.addEventListener("click", () => {
    mobileNav.classList.remove("hidden"); //Step 1 : Make visible the nav-bar
    mobileNav.classList.remove("-translate-x-full"); // Step 2 : Removing make that it starts being visible
    mobileNav.classList.add("translate-x-0");  //Brings the navbar into view.
  });
  
// Hide the mobile nav with slide-out effect
close.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-0"); //Brings the navbar reback into view.
  mobileNav.classList.add("-translate-x-full"); // step 1 : When clicking the close button,adding it brings back to off view of its total with negatively of the nav
});