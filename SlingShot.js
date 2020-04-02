class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage ("sprites/sling1.png") ;
        this.sling2 = loadImage ("sprites/sling2.png") ;
        this.sling3 = loadImage ("sprites/sling3.png") ;
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
        
    }

    attach(body){
        this.sling.bodyA = body; 
     }

    display(){

         image(this.sling1,200,290,40,200);
         image(this.sling2,172,295,40,110);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x>=200){
                
                strokeWeight(4);
            } else{
                strokeWeight(10);
            }
            stroke(48,22,8);
            line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+30, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x-40,pointA.y-12,10,30);
            
        }

    }
    
}