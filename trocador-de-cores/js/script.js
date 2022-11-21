const btnAzul = document.querySelector('#azul');
const btnAmarelo = document.querySelector('#amarelo');
const btnVerde = document.querySelector('#verde');
const btnVermelho = document.querySelector('#vermelho');

btnAzul.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(16, 64, 176)';
});

btnAmarelo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(161, 171, 14)';
});

btnVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(60, 176, 60)';
});

btnVermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(201, 29, 29)';
});
