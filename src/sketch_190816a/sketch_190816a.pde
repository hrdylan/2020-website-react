Bars bars = new Bars(10, 30, 0, 200, 10);

void setup() {
  size(300, 200);
  background(0);
}

void draw() {
  background(0);
  fill(153);
  bars.update();
  bars.display();
}

class Bars {

  float[] heights;
  float[] targets;
  float x;
  float y;
  float barWidth;
  float barMargin;
  int speed;
  
  Bars(int numBars, float barWidth, float x, float y, int speed) {
    this.x = x;
    this.y = y;
    this.barWidth = barWidth;
    this.barMargin = 4;
    this.heights = new float[numBars];
    this.targets = new float[numBars];
    this.speed = speed;
    for (int i = 0; i < this.heights.length; i++) {
      this.heights[i] = random(-200,-10);
    }
    for (int i = 0; i < this.heights.length; i++) {
      this.targets[i] = random(-200,-10);
    }
  }

  
  void display() {
    fill(255);
    for (int i = 0; i < this.heights.length; i++) {
      rect(this.x + i * (this.barWidth + this.barMargin), this.y, this.barWidth, heights[i]);
    }
  }
  void update() {
    for (int i = 0; i < this.heights.length; i++) {
      if (abs(this.heights[i] - this.targets[i]) < 5) {
        System.out.println("c");
        this.targets[i] = random(-200, -10);
      } else {
        this.heights[i] -= abs(this.heights[i] - this.targets[i])/(this.heights[i] - this.targets[i]) * this.speed;
      }
    }
  }
}
