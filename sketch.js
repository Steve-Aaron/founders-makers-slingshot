let knockableBoxes = [];
let world, engine;
let mConstraint;
let ground, bird, slingshot, button;
let level = 1;
let slingshotActive = true;

const { Engine, World, Body, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

function setup() {
    engine = Engine.create();
    world = engine.world;
    const canvas = createCanvas(600, 700);

    ground = new Ground(width/2, height-50, width, 100, 1);
    for (let i = 0; i < 3; i++) {
        const x = 400 + (i * 60);
        const y = 550
        const w = 50;
        const h = 300;
        const d = 1.5;
        knockableBoxes[i] = new Box(x, y, w, h, d);
    }
    bird = new Bird(100, 500, 20);
    slingshot = new Slingshot(200, 500, bird.body);


    pregameText = new ItemText(75, 100, 40, "Take down the Goliaths.")

    let mouse = Mouse.create(document.body);
    const options = {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF ^ 0x0002
            }
        }
    }
    mConstraint = MouseConstraint.create(engine, options); 
    World.add(world, mConstraint);
    // button.mousePressed(function() {
       //  alert("testing");
    // });    

}



function draw() {
    background('black');
    Engine.update(engine);
    ground.show();
    for (let box of knockableBoxes) {
        box.show();
    }
    bird.show();
    slingshot.show();
pregameText.show();
    for (let box of knockableBoxes) {
        if (box.body.position.x > width) {
            let winText = new ItemText(75, 100, 72, "You win!")
            let followupText = new ItemText(75, 150, 24, "Now learn how we take down Goliaths at Founders Makers.")
            if (!button) {
                button = createButton("Go to Next Level");
                button.style('background-color', '#ff4b0f'); // Set background color
                button.style('color', 'white'); // Set text color
                button.style('font-size', '18px'); // Set font size            
                button.position(80, 210);
                button.elt.addEventListener('mouseup', function() {
                    level++;
                    switch (level) {
                        case 2:
                            button.hide();
                            resetLevelTwo();
                            break;
                        case 3:
                            resetLevelThree();
                            break;
                        case 4:
                            resetLevelFour();
                            break;
                        default:
                            alert("You've won the game!");
                    }
                    setTimeout(() => {
                        slingshotActive = true;
                    }, 100);
                });
            }
            // add button that takes you to the next level.
            // let button = new Button(75, 200, "Next Level", "white", "#ff4b0f");
            pregameText.hide();
            winText.show(); followupText.show(); button.show();
        }
    }
}

