// Menu mobile
const burger = document.getElementById('burger');
const menu   = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Modal
const modal = document.getElementById("modal");
const btn1 = document.getElementById("openModal");
const btn2 = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn1.onclick = btn2.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
