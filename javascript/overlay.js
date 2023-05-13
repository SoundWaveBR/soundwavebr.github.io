const triggers = document.querySelectorAll(".overlay-trigger");
const overlay = document.querySelector(".product-overlay");

triggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const imgSrc = trigger.querySelector(".overlay").src;
    const description = trigger.parentElement.querySelector(".product-description").textContent;
    const price = "$100"; // insira aqui o preço do produto clicado
    const productOverlay = overlay.cloneNode(true);
    productOverlay.querySelector("img").src = imgSrc;
    productOverlay.querySelector(".product-description").textContent = description;
    productOverlay.querySelector(".product-price").textContent = price;
    document.body.appendChild(productOverlay);
    productOverlay.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  document.body.removeChild(document.querySelector(".product-overlay"));
});
