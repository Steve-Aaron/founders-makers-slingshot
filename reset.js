function keyPressed() {
  if (key == "r") {
    World.remove(world, bird.body);
    bird = new Bird(100, 500, 20);
    slingshot.attach(bird.body);
  }
  if (key == "d") {
    resetLevelTwo();
  }
}

function resetLevelOne() {
  World.remove(world, bird.body);
  bird = new Bird(100, 500, 20);
  slingshot.attach(bird.body);

  for (let box of knockableBoxes) {
    World.remove(world, box.body);
  }
  knockableBoxes = [];

  for (let i = 0; i < 3; i++) {
    const x = 400 + i * 60;
    const y = 550;
    const w = 50;
    const h = 300;
    const d = 1;
    knockableBoxes[i] = new Box(x, y, w, h, d);
  }
}

function resetLevelTwo() {
  World.remove(world, bird.body);
  bird = new Bird(100, 500, 20);
  slingshot.attach(bird.body);

  for (let box of knockableBoxes) {
    World.remove(world, box.body);
    Body.setVelocity(box.body, { x: 0, y: 0 });
  }
  knockableBoxes = [];

  for (let i = 0; i < 5; i++) {
    const x = 400 + i * 30;
    const y = 450;
    const w = 20;
    const h = 200;
    const d = 3;
    knockableBoxes[i] = new Box(x, y, w, h, d);
  }
}
