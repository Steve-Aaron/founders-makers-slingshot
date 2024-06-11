let ground;
let knockableBox;
let bird;

function setup() {
    createCanvas(600, 900);
    ground = new Box(0, 800, 600, 100);
    knockableBox = new Box(400, 700, 50, 100);
    bird = new Bird(100, 100, 20);
}

class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    show() {
        fill('#ff4b0f')
        rect(this.x, this.y, this.w, this.h);
    }
}


function draw() {
    background('black');
    ground.show();
    knockableBox.show();
    bird.show();
}

