const radioInput = document.querySelector('#radio-input');
const rangeSize = document.querySelector('.range-size');
const respostaContainer = document.querySelector('.resposta-container');
const senhaBloco = respostaContainer.querySelector('div');

rangeSize.innerHTML = radioInput.value;

// função que envia um numero aleatória
    function getRandomNumbers() {
        const random = Math.floor(Math.random() * 10);
        return String(random);
    }
// função que envia uma letra/simbolo aleatória
    function getRandomLyrics() {
        const letras = '@$%&aAbB.cCdDeEfF!gGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ;/';
        const random = Math.round(Math.random()*59)
        return letras[random];
    }

// função que retorna um valor booleano aleatório
    function trueOrFalse() {
        let random = Math.round( Math.random() * 10);
        const validador = random % 2 === 0 ? true : false;
        return validador;
    }
    
// EVENTOS
radioInput.addEventListener('input', (e) => {
    rangeSize.innerHTML = radioInput.value;
})

document.addEventListener('click', (e) => {
    let password = '';

    if(e.target.classList.contains('btn-gerador')) {
        let i = 0;
        while(i <= radioInput.value -1) {
            const operador = trueOrFalse();
            if(operador) password += getRandomLyrics();
            if(!operador) password += getRandomNumbers();
            i++
        }
        respostaContainer.style.display = 'block';
        senhaBloco.innerText = password;
    }
})

senhaBloco.addEventListener('click', function(){
    navigator.clipboard.writeText(senhaBloco.innerText);
})