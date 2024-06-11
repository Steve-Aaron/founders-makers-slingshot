class Button {
  constructor(x, y, text, textColor, bgColor) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
    this.visible = true; // Add a visibility flag
  }

  show() {
    textSize(24);
    fill(this.bgColor);
    rect(this.x, this.y, 200, 50);
    fill(this.textColor);
    text(this.text, this.x + 10, this.y + 30);
  }

  hide() {
    this.visible = false; // Hide the button by setting the visibility flag to false
  }
}

function mousePressed() {
  // Button.isClicked();
}
