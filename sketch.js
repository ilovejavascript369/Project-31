var fixedRect, movingRect
var divisions = []
var particles = []
var plinkos = []
var divisionHeight = 300;
function setup() {
  createCanvas(800,400);
}
for (var k=0; k<=width;k+=80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
}
for (var j=40; j<=width;j+=50){
  plinkos.push(new Plinko(j,75));
}
for (var j=15; j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}

for (var j=0; j<particles.length;j++){
  particles[j].display()
}
for (var k=0; k<particles.length;k++){
  divisions[kj].display()
}
function draw() {
  background(0,0,0);
  divisions.display();
  plinkos.display();
  particles.display();
  
  drawSprites();
}

