const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,10,20)
    box2 = new Box(200,230,20,26)
    ground1 = new ground(200,390,400,20)
}
function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground1.display();
}