var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;
var world,engine;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var rect1=new Redzone(100,200,10,10);
	//var rect2=new Redzone();
	//var rect3=new Redzone();
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 boxPosition=width/2-100 boxY=610; 
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0); 
	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody); 
	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
	 boxBase.shapeColor=color(255,0,0); 
	 boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	 World.add(world, boxBottomBody); 
	 boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0);
	 boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} ); 
	 World.add(world, boxRightBody)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect1.display();
  drawSprites();
 
}

function keyPressed() {
 
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
   if (keyCode === LEFT_ARR0W) { 
	   helicopterSprite.x=helicopterSprite.x-20; 
	   translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation) 
	} else if (keyCode === RIGHT_ARROW) { 
		helicopterSprite.x=helicopterSprite.x+20; 
		translation={x:20,y:0} 
		Matter.Body.translate(packageBody, translation) 
	} else if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(packageBody,false); 
	}
  
}



