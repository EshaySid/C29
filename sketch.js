const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//g=ground
var g;

//r=rope
var r;

//f=fruit
var f;

//l=link
var l;

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  g = new Ground(300, 690, 600, 10);
  r=new Rope(7,{x:300,y:1});
  f=new Fruit(300,250,50);
  Matter.Composite.add(r.body,f.fruit)
  l=new Link(r.body,f.fruit);
}

function draw() {
  background(51);
  Engine.update(engine);

  g.Display();
  f.Display();
  r.show();
}
