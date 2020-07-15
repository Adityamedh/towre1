const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(1150,200,70,70);
    box2 = new Box(1070,200,70,70);

    

    box3 = new Box(990,200,70,70);
    box4 = new Box(910,200,70,70);

    

    box5 = new Box(830,200,70,70);

    box6 = new Box(860,100,70,70);
    
    box7 = new Box(960,100,70,70);

    box8 = new Box(1030,100,70,70);

    box9 = new Box(1110,100,70,70);

    box10  = new Box(1070,40,70,70);

    box11  = new Box(990,40,70,70);

    box12 = new Box(910,40,70,70);

    box13 = new Box(950,0,70,70);

    box14 = new Box(1030,0,70,70);





    platform = new Ground(1000,300,450,10);
    

    bird = new Bird(100,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    bird.display();

    platform.display();
    
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}