class Bird {
    constructor(x, y, r) {

        const options = {
            restitution: 0.2,
            density: 10,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF ^ 0x0002
            }
        }
        this.body = Matter.Bodies.circle(x, y, r, options);
        Matter.World.add(world, this.body);
        this.r = r;
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(fm_logo, 0, 0, this.r * 2, this.r * 2);
        // ellipse(0, 0, this.r * 2);
        pop();
    }
}