
class Ball {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':2.0
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
    fill("yellow")
    ellipse(0, 0, 60);
    pop();

      
  }
}

