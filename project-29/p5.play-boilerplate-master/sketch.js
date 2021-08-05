const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
var stand1, stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box14,box15,box16,box13;
var box17,box18,box19,box20,box21;
var box22,box23,box24,box25;
var slingshot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,560);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1  = new Stand (500,500,250,10);
    stand2 = new Stand (900,300,200,10);

    box1 = new Box (395,470);
    box2 = new Box (430,470);
    box3 = new Box (465,470);
    box4 = new Box (500,470);
    box5 = new Box (535,470);
    box6 = new Box (570,470);
    box7 = new Box (605,470);

    box8 = new Box (430,420);
    box9 = new Box (465,420);
    box10 = new Box (500,420);
    box11 = new Box (535,420);
    box12 = new Box (570,420);

    box13 = new Box (465,370);
    box14 = new Box (500,370);
    box15 = new Box (535,370);

    box16 = new Box (500,320);

    box17 = new Box (820,270);
    box18 = new Box (855,270);
    box19 = new Box (890,270);
    box20 = new Box (925,270);
    box21 = new Box (960,270);

    box22 = new Box (855,220);
    box23 = new Box (890,220);
    box24 = new Box (925,220);

    box25 = new Box (890,170);

    slingshot = new Polygon (this.Polygon,{x:100,y:200});
}

function draw(){
     background(0)

     ground.display();
     stand1.display();
     stand2.display();

     box1.display();
     box2.display();
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
     box15.display();


     box16.display();

     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();

     box22.display();
     box23.display();
     box24.display();

     box25.display();

     slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    polygon.fly();
}

function keyPressed(){
    if(keyCode===32){
        polygon.attach(bird.body)
    }
}