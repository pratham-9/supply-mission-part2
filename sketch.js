var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var board1;
var board2;
var board3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	board1 = createSprite(350,650,200,10);
	board2 = createSprite(450,550,10,200);
	board3 = createSprite(250,550,10,200); 
	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  board1.shapeColor = "red";
  board2.shapeColor = "red";
  board3.shapeColor = "red";
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
}
}     