const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var database;
var canvas;
var gameState = 0;
var playerCount;
var t;
var fruit1,fruit2,fruit3;
var engine, world;
var time;
var p1,p2,p3;
var a;
var j;
var fruits1=[];
//var y = displayWidth/3;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-20);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
  time = minute();
  t = time;
   a =0;
   j=0;
  console.log(t);
  x=displayWidth/3;
    p1 = createSprite(x/2,600,20,20);
    p2 = createSprite((x/2)*3,600,20,20);
    p3 = createSprite((x/2)*5,600,20,20);
    
    for(var i=0; i<60;i++ ){
    fruit1 = new Fruit(random(10,(displayWidth/3 -20)));
      fruits1.push(fruit1);
    }

    fruit2 = new Fruit(random((displayWidth/3+20),((displayWidth/3*2) -20)));
    fruit3 = new Fruit(random(((displayWidth/3*2) +20)),(displayWidth -20));
}


function draw(){
    
    background("lightblue");
    Engine.update(engine);
    time = minute();
  console.log("t "+t);
  console.log("time "+time);
  var x = displayWidth/3;
  console.log("x "+x);

    
  line(displayWidth/3,0,displayWidth/3,displayHeight);
  line((displayWidth/3*2),0,(displayWidth/3*2),displayHeight);
  line((displayWidth/3*3),0,(displayWidth/3*3),displayHeight);
a=0;
 if(t+1===time && frameCount % 20 === 0){
  // if(a===0){
  Matter.Body.setPosition(fruits1[j].body,{x:random(10,displayWidth/3-10) , y:0});
//a=a+1;
  // }
  
   j++;
 }
 for(var k=0;k<j;k++){
  fruits1[k].display();
}

  if(t+2===time){
    if(a===1){

   Matter.Body.setPosition(fruit2.body,{x:random((displayWidth/3+20),((displayWidth/3*2) -20)) , y:0})
   a=a+1;
        }
            fruit2.display();
  }
  if(t+3===time){
    if(a===2){
      Matter.Body.setPosition(fruit3.body,{x:random(((displayWidth/3*2) +20),(displayWidth -20) ), y:0});
      a=0;
    }
    fruit3.display();

  }
      

   
    
    /*  fruit1.display();
      fruit2.display();
      fruit3.display();
*/
      if(keyDown(LEFT_ARROW)){
        if(p1.x>0 ){
          p1.x=p1.x-10;
        }
      }
      if(keyDown(RIGHT_ARROW)){
        if(p1.x< displayWidth/3){
          p1.x=p1.x+10;
        }
      }
    

      

    drawSprites();
 
}


