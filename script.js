const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => { 
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump'); 
}, 500);

}

 const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', '')

        // Ajuste para verificar se a colisão ocorre quando o Mario e o cano se tocam
    if (pipePosition > 0 && pipePosition < 70 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './IMG/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }  

},10) 
document.addEventListener('keydown', jump);


document.addEventListener('touchstart', jump);