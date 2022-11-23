const modal = document.querySelector(".modal-fechado");
const btnClose = document.querySelector(".botao-fechar");
const btnOpen = document.querySelector(".botao-abrir");

btnClose.addEventListener('click', () => {
    modal.classList.remove("modal-aberto");
})

btnOpen.addEventListener('click', () => {
    modal.classList.add("modal-aberto");
})