
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var newton,newton_1;
var tree;
var stone;
var chain;

var bg;
var apple_1,apple_2,apple_3;
function preload()
{
  bg=loadImage("sunny background.png");
	newton_1=loadImage("newton.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
	stone=new Stone(100,500,500);
	
//tree=new Tree();
chain=new Chain(stone.body,{x:100,y:500});
newton=createSprite(230,500);
newton.addImage(newton_1);
newton.scale=0.5;
apple_1=new Apple(650,265,100);
apple_2=new Apple(735,125,100);
apple_3=new Apple(790,255,100);
	Engine.run(engine)
  
}


function draw() {
  
  background(bg);
 //tree.display();
 stone.display();
 apple_1.display();
 apple_2.display();
 apple_3.display();
  
  chain.display();
detectCollision(stone,apple_1);
detectCollision(stone,apple_2);
detectCollision(stone,apple_3);


  drawSprites();
 console.log(mouseX);
 console.log(mouseY);
}
function detectCollision(obj1,obj2){
  pos1=obj1.body.position;
  pos2=obj2.body.position;
  if(pos1.x-pos2.x<pos1.r+pos2.r
    &&pos2.x-pos1.x<pos1.r+pos2.r
    &&pos1.y-pos2.y<pos1.r+pos2.r
    &&pos2.y-pos1.y<pos1.r+pos2.r){
      Matter.Body.setStatic(obj2,false);
    }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 chain.fly();
}

