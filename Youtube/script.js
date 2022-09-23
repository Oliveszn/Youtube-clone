const menuBtn = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const navShort = document.querySelectorAll(".nav-shorts");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("hidden-bar");
  sidebar.classList.toggle("small-sidebar");
  navShort.forEach((short) => short.classList.toggle("nav-shorts"));
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("small-sidebar");
  navShort.forEach((short) => short.classList.add("nav-shorts"));
  overlay.classList.remove("hidden");
  sidebar.classList.add("hidden-bar");
});
