const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,pig2,log1,log2,log3,log4,box2,box3,box5,ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new PIG(810,320);
    pig2 = new PIG(810,240);

    log1 = new LOG(810,260,300,PI/2);
    log2 = new LOG(810,180,300,PI/2);
    log3 = new LOG(760,120,150,PI/7);
    log4 = new LOG(870,120,150,-PI/7);


    ground = new Ground(600,390,1200,20)
    
}

function draw(){
    background(0);

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();


    ground.display();
}