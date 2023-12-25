export class obstacle {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.scoll = -5;
    }
    
            spawn(){
                const canvas = document.querySelector('.canvas');
                const context = canvas.getContext('2d');

                context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);                
            }

}
