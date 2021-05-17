const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response,j,daytime,hour;
var ampm;


function preload() {
    getime();
    bgImg=loadImage("sunset7.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

   if(backgroundImg!=null ){
        background(backgroundImg);
        }else{background(bgImg)
    }

    Engine.update(engine);

    
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    fill("white")
    textFont("Algerian")
    text("TIME : " + hour + ampm,50,50);
}

async function getime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
   if(hour <= 8 && hour >= 6){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 16 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 18 && hour >= 16){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 18){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   backgroundImg = loadImage(bg);

}