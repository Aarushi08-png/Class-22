const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
    restitution: 1.5,
    //isStatic: true

    }

    ball = Bodies.circle(200, 200, 20, ball_options);
    World.add(world,ball);

    console.log(ground);
    console.log(ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("orange");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    

}