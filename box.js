class Box {
    constructor(x, y, w, h, d) {
        this.w = w;
        this.h = h;
        this.d = 1;
        const options = {
            restitution: 0.1,
            friction: 1,
            density: this.d,
            collisionFilter: {
                category: 0x0001,
            }
        }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body)
    }
    
    show() {
        const pos = this.body.position;
        const angle = this.body.angle; // the box could wobble, so we need to know the angle
        push(); // saves the current drawing style settings and transformations
        translate(pos.x, pos.y); 
        rotate(angle);
        fill('#ff4b0f')
        rectMode(CENTER); // matterJS uses the center of the rectangle as the origin, while p5 uses the top left corner. This line makes the two systems compatible.
        rect(0, 0, this.w, this.h);
        pop(); // restores the previous drawing style settings and transformations
    }
}

