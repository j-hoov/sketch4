
let shape1 = [];
let shape2 = []; 
let a = 175;
let num_seg = 5;
let seg_d = 30;
let bool;
let b;
let s_w = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i=0; i<num_seg; i++){
    let len1 = .5*height+i*seg_d;
    //let len2 = .5*height+i*seg_h;
    let len3 = .5*width+i*seg_d;
    
    shape1[i] = new Seg(width/2-.5*a, len1, width/2+.5*a, len1);
    //shape2[i] = new Seg(width/2-.5*a, len2, width/2+.5*a, len2);
    shape2[i] = new Seg(len3,height/2-.5*a,len3,height/2+.5*a);
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    num_seg -= 1;
  }
  if (keyCode == RIGHT_ARROW){
    num_seg += 1;
  }
  if (keyCode == UP_ARROW){
      s_w += 1;
  }
  if (keyCode == DOWN_ARROW){
      s_w -= 1;
  }
}

function draw() {
    fill(0,25);
    noStroke();
    rect(0,0,width,height); 

  bool = mouseIsPressed;
  if (bool==false){
    stroke(200);
  }
  if (bool==true){
    stroke(200,10,10);
  }

  strokeWeight(s_w);

  for (let i=0; i<num_seg; i++){
    shape1[i].move();
    shape1[i].display();
    shape2[i].move();
    shape2[i].display();
  }  
}

class Seg {
  constructor(tx1,ty1,tx2,ty2) {
    this.x1 = tx1;
    this.y1 = ty1;
	  this.x2 = tx2;
	  this.y2 = ty2;
  }

  move() {
    a = map(mouseY,0,height,5,300);
    b = map(mouseX,0,width,0,height);
    for (let i=0; i<num_seg; i++){
      shape1[i].x1 = mouseX - .5*a;
      shape1[i].x2 = mouseX + .5*a;
      shape2[i].y1 = b-.5*a;
      shape2[i].y2 = b+.5*a;
      }
    }


  display() {
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
