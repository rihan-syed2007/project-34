const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg;


function preload() {
    backgroundImg=loadImage("images/bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);

    boggie1= new Boggie(50,170,50,50);
    boggie2= new Boggie(150,170,50,50);
    boggie3= new Boggie(250,170,50,50);
    boggie4= new Boggie(350,170,50,50);

    chain = new Chain(boggie1.body,boggie2.body);
    chain2 = new Chain(boggie2.body,boggie3.body);
    chain3 = new Chain(boggie3.body,boggie4.body);

    rock1 = new Rock(1100,200,150,150);
}

function draw(){
   
        background(backgroundImg);
    

        noStroke();
        
    Engine.update(engine);
    //strokeWeight(4);
   boggie1.show();
   boggie2.show();
   boggie3.show();
   boggie4.show();

   chain.show();
   chain2.show();
   chain3.show();

   rock1.show();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(boggie4.body,{x:boggie4.body.position.x, y:boggie4.body.position.y},{x:0.5, y:0});
      
    }



}


