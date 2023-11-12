let F;
let ps;
let checkbox1;
let checkbox2;

function setup() {
  createCanvas(windowWidth - 30, 400);

  F = new forceField(25, 20);
  ps = Array.from({ length: 700 }, () => new particle(1));

  checkbox1 = createCheckbox('campo di forze', true);
  checkbox2 = createCheckbox('particelle', true);
}

function draw() {
  background(22, 22, 24, 20);

  F.update();
  if(checkbox1.checked())
    F.draw_force();

  if(checkbox2.checked()){
    for (var p of ps) {
      if (!p.active) p.init();

      p.set_force(F);
      p.update();
      p.draw_particle();
    }
  }
}

class forceField {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.resolution = createVector(1 / n, 1 / m);
    this.offset = createVector(width, height);
    this.offset.mult(this.resolution);

    this.force = Array.from({ length: m }, () => new Array(n));
    this.positions = Array.from({ length: m }, (v, i) =>
      Array.from({ length: n }, (w, j) =>
        p5.Vector.mult(this.offset, [j + 0.5, i + 0.5])
      )
    );
  }

  update() {
    let i, j;

    for (i = 0; i < this.m; i++) {
      for (j = 0; j < this.n; j++) {
        this.force[i][j] = p5.Vector.fromAngle(
          noise(j * this.resolution.x, i * this.resolution.y, millis() * 0.0001) *
            TWO_PI *
            1.5
        );
        this.force[i][j].mult(this.offset.x * 0.5, this.offset.y * 0.5);
      }
    }
  }

  draw_force() {
    let i, j;

    stroke(255);
    strokeWeight(1);

    for (i = 0; i < this.m; i++) {
      for (j = 0; j < this.n; j++) {
        line(
          this.positions[i][j].x,
          this.positions[i][j].y,
          this.positions[i][j].x + this.force[i][j].x,
          this.positions[i][j].y + this.force[i][j].y
        );
      }
    }
  }
}

class particle {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
    this.active = false;
  }

  init() {
    this.pos.set(random() * width, random() * height);
    this.vel.set(0, 0);
    this.acc.set(0, 0);
    this.mass = map(random(), 0, 1, 1, 3);
    this.active = true;
  }

  set_force(F) {
    let i = floor(this.pos.y / F.offset.y);
    let j = floor(this.pos.x / F.offset.x);

    p5.Vector.div(F.force[i][j], this.mass, this.acc);
  }

  update() {
    this.vel.add(p5.Vector.mult(this.acc, deltaTime * 0.01));
    this.pos.add(p5.Vector.mult(this.acc, deltaTime * 0.01));

    if (
      this.pos.x < 0 ||
      this.pos.x >= width ||
      this.pos.y < 0 ||
      this.pos.y >= height
    )
      this.active = false;
  }

  draw_particle() {
    strokeWeight(2);
    stroke(255, 187, 58);
    point(this.pos);
  }
}
