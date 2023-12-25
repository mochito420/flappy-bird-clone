import { starGame } from "./gameIngine.js";

const canvas = document.querySelector('.canvas');
        canvas.width = 800;
        canvas.height = 500;
    const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black'
ctx.font = '60px italic'
ctx.fillText('Press Space to star',180,250)



const starGameButton = (e) => {
    if (e.code == 'Space') {
        starGame()
        window.removeEventListener('keydown', starGameButton)
    }
}
window.addEventListener('keydown',starGameButton)
