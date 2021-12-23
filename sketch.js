// Fonts that are randomly chosen
var fonts = ["Georgia", "Tahoma", "Roman", "Times New Roman", "Garamond", "Brush Script MT", "Trebuchet MS"]

function setup() {
  createCanvas(900,900);
}

function draw() {
  textSize(25);
  text("EPILEPSY WARNING", 450, 450);
}
// Draws a elipse and text when the mouse is pressed
function mousePressed(){
  background("#" + (mouseY + 200));
  ellipse(mouseX, mouseY,mouseX, mouseY);
  fill("#" + mouseX);
  stroke("#" + mouseY);
  strokeWeight(50);
  textSize(20);
  textAlign("center");
  textFont(random(fonts));
  textStyle("cursive");
  text("Click Around :)", mouseX, mouseY);
}