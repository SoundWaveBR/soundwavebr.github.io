const modal = document.querySelector('#myModal');
const modalImg = document.querySelector("#img01");
const captionText = document.querySelector("#caption");
const imgs = document.querySelectorAll('.box img');

imgs.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
});

const span = document.querySelector(".close");

span.onclick = function () {
  modal.style.display = "none";
}
