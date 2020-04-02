
class Ball1 {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.1
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);



  }


  
  display(){

    var c = ["red","blue","green"];



  
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("Blue")
    ellipse(0, 0, 60);
    pop();

      
  }
}

