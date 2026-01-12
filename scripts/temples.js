const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});