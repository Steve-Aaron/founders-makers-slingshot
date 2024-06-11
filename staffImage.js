// a two-by-two image of the staff member found in file /assets/staff/1.jpg

class StaffImage {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
  }

  hide() {
    this.img = "";
  }
}
