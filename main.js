const hamburgBtn = document.getElementById("hamburg-btn");
const navbar = document.getElementById("navbar");

hamburgBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  hamburgBtn.classList.toggle("close-btn");
});
