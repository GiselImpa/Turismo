const form = document.getElementById("formContacto");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    modal.style.display = "flex";
  }, 1500);
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});
