class Slingshot {
    constructor(x, y, body) {

        const options = {
            pointA : { x: x, y: y },
            bodyB : body,
            stiffness : 0.2,
            length: 60
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyB = null;
        slingshotActive = false;
    }

    show() {
        if (this.sling.bodyB) {
        stroke(200);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position; 
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }

    attach(body) {
        this.sling.bodyB = body;
    }
}


function mouseReleased() {
  if (slingshotActive) {
    setTimeout(() => {
      slingshot.fly();
    }, 25);
  }
}

