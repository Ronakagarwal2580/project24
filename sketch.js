
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone,stone2,stone3,stone4,stone5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(400,350);
	stone = new Stone(600,600,50,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  hammer.display();
  stone.display(); 
 
 
 
}



