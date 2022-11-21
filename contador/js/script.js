const subtrair = document.querySelector('.subtrair');
const zerar = document.querySelector('.zerar');
const somar = document.querySelector('.somar');
const numero = document.querySelector('p');

let num = 0;

const contador = () => {
    if(num % 2 == 0){
        numero.style.color = "green";
        numero.innerHTML = num;
    } else {
        numero.style.color = "red";
        numero.innerHTML = num;
    }   
}
contador(num);

subtrair.addEventListener('click', () => {
    if(num > 0){
        num-=1;
        contador(num);
    }
});

zerar.addEventListener('click', () => {
    num=0;
    contador(num);
});

somar.addEventListener('click', () => {
    num+=1;
    contador(num);
});