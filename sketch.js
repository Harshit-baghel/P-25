
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var dustbin,paper,ground,engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,450,40)
ground=new Ground(800,670,1600,20)
dustbin=new Dustbin(1200,650)
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{width:1600,height:70,wireframe:false}
})

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0,60,150);
  
  paper.display()
  dustbin.display()
  ground.display()

}

function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-125}); } }

