class Fruit{
   constructor(x){
       var options = {
           isStatic : false
       }
        this.body=Bodies.circle(x,0,30,options);
        this.y = 0;
        this.radius = 30;
        World.add(world,this.body);
   }
     display(){
         var pos = this.body.position;
         ellipseMode(CENTER);
         ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
     }
     
  }
     
  
  