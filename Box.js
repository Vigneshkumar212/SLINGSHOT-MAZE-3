var score = 0;
class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,50);
    this.image = loadImage("sprites/box.png");
    this.Visibility = 255;
  }
display(){
//console.log (this.body.speed);


if (this.body.speed < 3){

  super.display();

} else {
  
  push();
  this.Visibility = this.Visibility - 5;
  tint(255,this.Visibility);
  
  image(this.image,this.body.position.x,this.body.position.y,30,50);
  pop();
  World.remove(world,this.body);
  
  
}
  if (this.Visibility === 0){
    score  = score + 50; 
  }

  text("Your Score Is " + score ,35,20);

}
};
