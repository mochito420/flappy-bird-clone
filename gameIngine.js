import { player } from "./player.js";
import { obstacle } from "./obstacles.js";

export const starGame = () => {
            //select canvas
    const canvas = document.querySelector('.canvas');
        canvas.width = 800;
        canvas.height = 500;
    const context = canvas.getContext('2d');
            //spawn Bird
    const bird = new player(90, 10, 30, 30, 'black');
            //spawn obstacles
    const obsArray = []
    let topObs, botObs;
    const ramdonHeight = () =>{
            const heighRamdon = Math.floor(Math.random() * 400 + 20)
            topObs = new obstacle(canvas.width, 0, 30, heighRamdon, 'white')
            botObs = new obstacle(canvas.width, topObs.height + 80 , 30, canvas.height, 'white')
                obsArray.push(topObs, botObs)
    }
    
    for (let i = 0 ; i < 1000 ; i++){
        setTimeout(() => {
           ramdonHeight() 
        }, i * 1500);
    }
    
            //game over stament
    let gameOver = false;
            

    const update = () =>{
        context.clearRect(0, 0, canvas.width, canvas.height);
    };


    const animateGame = () => {
        const gameMechanics = () => {
            bird.spawn(60, 10, 30, 30, 'red')

            bird.y += bird.fall

            bird.fall += bird.gravity

            window.addEventListener('keydown',(e => {
                if (e.code == 'Space') {
                    bird.jumping = true;
                    if (bird.jumping) {
                        bird.fall = bird.jumpHeight;
                    }
                }
            }));


            obsArray.forEach((obs)=>{
                obs.spawn()
                obs.x += obs.scoll
                const collitionsObs = () => {
                if (bird.x < obs.x + obs.width &&
                    bird.x + bird.width > obs.x &&
                    bird.y < obs.y + obs.height &&
                    bird.y + bird.height > obs.y){
                        console.log('colition top detected');
                        gameOver = true;
                        if (gameOver) {
                            location.reload();
                        };
                    };
                };
                collitionsObs();
            })
            
            const collitionsBird = () => {
                if (bird.height + bird.y > canvas.height ||
                    bird.y + bird.height < 0){
                        console.log('colition top detected');
                        gameOver = true;
                        if (gameOver) {
                            location.reload();
                        };
                }; 
            };
            collitionsBird();

        }
            gameMechanics();
    };

            //game loop
    const gameLoop = () => {
        update();
        animateGame();
        requestAnimationFrame(gameLoop);
    }
        gameLoop()
    
};

