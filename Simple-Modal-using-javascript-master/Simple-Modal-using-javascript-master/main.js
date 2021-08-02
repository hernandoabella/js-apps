const images = document.querySelectorAll(".menu_image img");
const modal = document.querySelector(".alert");
const img_modal = document.querySelector(".alert .img_content img");
const title_modal = document.querySelector(".img_content h1");
const close = document.querySelector(".alert .close");
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    img_modal.src = img.src;
    title_modal.innerHTML = img.alt;
    close.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.addEventListener("dblclick", () => {
      modal.style.display = "none";
    });
  });
});
