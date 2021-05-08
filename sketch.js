
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var wreckingBall,chain,ground,block1,block2,block3,block4,block5,block6,block7;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground=new Ground(400,590,800);
	wreckingBall=new Bob(350,500,60);
	chain=new Rope(wreckingBall.body,{x:350,y:250});
	block1=new Block(430,540,50,80);
    block2=new Block(490,540,50,80);
	block3=new Block(550,540,50,80);
    block4=new Block(460,450,50,80);
	block5=new Block(520,450,50,80);
	block6=new Block(490,360,50,80);
	block7=new Block(490,280,50,80);

}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  ground.display();
  wreckingBall.display();
  chain.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
}
function mouseDragged() {
	Body.setPosition(wreckingBall.body,{x:mouseX,y:mouseY});
	
}