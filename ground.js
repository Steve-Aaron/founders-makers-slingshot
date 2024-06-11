class Ground extends Box {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.body.isStatic = true;
    }

    show() {
        fill('#8a6e46');
        super.show();
    }
} 