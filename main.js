
const btnOpenModal = document.getElementById('btnOpenModal');
const modal = document.getElementById('myModal');
const fundo = document.getElementById('fundoModal');

btnOpenModal.addEventListener('click', () => {
  modal.style.display = "block";
  fundo.classList.add("modal-open");
  
});

const btnCloseModal = document.getElementById('btnCloseModal');

btnCloseModal.addEventListener('click', () => {
  modal.style.display = "none";
  fundo.classList.remove("modal-open");
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    fundo.classList.remove("modal-open");
  }
});