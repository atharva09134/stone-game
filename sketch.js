
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
	
	 ground = createSprite(400,590,800,20)
	 ground.shapeColor = "brown"

	hammer = createSprite(420,500,180,25)
	hammer.shapeColor = "yellow"

	 stone = createSprite(300,506,150,150)
	 stone.shapeColor = "black"
	 
	 rubber  = createSprite(450,540,80,80)
	 rubber.shapeColor = "blue"




	 s1 = createSprite(300,570,20,20)
	 s1.shapeColor = "red"
	 s2 = createSprite(250,570,20,20)
	 s2.shapeColor = "red"
	 s3 = createSprite(200,570,20,20)
	 s3.shapeColor = "red"
	 s4 = createSprite(150,570,20,20)
	 s4.shapeColor = "red"
	 s5 = createSprite(100,570,20,20)
     s5.shapeColor = "red"



	Engine.run(engine);
  
}


function draw() {
 
  
	background("skyblue");
  
	hammer.y = mouseY;
	hammer.x = mouseX;
     





  drawSprites();
 
}



