class ItemText {
    constructor(x, y, fsize, text) {
        this.text = text;
        this.x = x;
        this.y = y;
        textSize(fsize);
        fill('white');
    }
    
    show() {
        fill('white');
        textFont(helvetica);
        text(this.text, this.x, this.y, 500);
        this.visible = true;
    }

    hide() {
        this.text = "";
        this.visible = false;
    }
}