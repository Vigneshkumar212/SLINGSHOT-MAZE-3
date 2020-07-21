const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground,Platform,i, box ;
var ball,ball1;
var gameState = "play";
var time = 120;

var source = "ball"  ;


function setup(){
    //basics
    createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    
    //creating place for objects to lie on
    ground = new Ground(250,height,1200,30);
    Platform = new Ground(850,350,400,15);
    
    //Platform boxes
    box1 = new Box(850,349,30,50);//bot rig
    mox = new Box(800,452,10,200);//bot rig
    box2 = new Box(880,349,30,50);//bot mid
    box3 = new Box(820,349,30,50);//bot left
    box4 = new Box(833,301,30,50);//mid left
    box5 = new Box(867,301,30,50);//mid rig
    box6 = new Box(850,253,30,50);//top center
    //Ground boxes
    box7 = new Box(500,450,30,50);
    box8 = new Box(530,450,30,50);
    box9 = new Box(470,450,30,50);
    box10 = new Box(560,450,30,50);
    box11 = new Box(440,450,30,50);
    box12 = new Box(590,450,30,50);
    //layer2
    box13 = new Box(500,399,30,50);
    box14 = new Box(530,399,30,50);
    box15 = new Box(470,399,30,50);
    box16 = new Box(560,399,30,50);
    //layer5
    box17 = new Box(500,348,30,50);
    box18 = new Box(530,348,30,50);
    //layer6
    box19 = new Box(515,300,30,50);
    //makig the ball to be thrown
    ball = new Ball(200,200,30,50);
    ball1 = new Ball1(100,450,30,50);
    
    //Creating the Sling Shot or the Chain
    slingShot = new SlingShot( (ball.body),{x:193 ,y:320 });
    slingShot1 = new SlingShot( (ball1.body),{x:193 ,y:320 });
    slingShot1.fly();
}

function draw(){
    //basics
    background("lightblue");
    Engine.update(engine);
    

    textSize(20);
    
    if (gameState === "start"){

        text("Instructions",500,50);
        text("Drag  the  ball ,  aim  and  shoot  at  the  boxes.",20,140);
        text("Press  SPACE  to  attach  the  ball  to  the  Catapult. ",20,170);
        text("You  win  if  you  1500 points !!!",20,200);
        text("You  lose  if  the  time  gets  over. ",20,230);
        text("The  boxes  only  gets  destroyed  if  you  hit  them  hard,  so  good  luck .",20,260);
        text("To get back to the game press backspace.",20,290);
        
    }

    if (gameState === "play"){
  
        if (time >=1){
            if(frameCount % 60 === 0){
                time--;
            }
        }
            
        if(time===0 || score === 1000){
                  gameState = "end";
        }
        
        text("Time Left: "+ time + " seconds" ,250,20) ;

        text("Press  esc (ESCAPE)  to  read  the  Instructions",600,20);   
        text("The yellow ball is heavey,thus does more damage",600,45); 
        text("The blue ball is light,thus does very less damage",600,70); 
         
    


        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        box16.display();
        box17.display();
        box18.display();
        box19.display();
        mox.display();  


        ball.display();
        ball1.display();
       
     
        slingShot.display();
        slingShot1.display();
      
        ground.display();
        Platform.display(); 
        
        

    }       
    
  
    if (gameState === "end"){
        if (time === 0) {
            text(" You lose, Better luck next time ",600,250);
            text(" You scored "+score+" points.",600,275);
            World.remove(world,box1);
            World.remove(world,box2);
            World.remove(world,box3);              
            World.remove(world,box4);
            World.remove(world,box5);
            World.remove(world,box6);
            World.remove(world,box7);
            World.remove(world,box8);
            World.remove(world,box9);
            World.remove(world,box10);
            World.remove(world,box11);
            World.remove(world,box12);
            World.remove(world,box13);
            World.remove(world,box14);
            World.remove(world,box15);
            World.remove(world,box16);
            World.remove(world,box17);
            World.remove(world,box18);
            World.remove(world,box19);
            World.remove(world,ball);
            World.remove(world,slingShot);
              }
        
        if (score === 1000){
            text(" Congrats !!! ",597,200);
            text(" You win",600,250);
        } 
    }
    
    if(keyIsDown (32) && source === "ball"  ){
        
        Matter.Body.setPosition(ball.body, {x: 100 , y: 450});
        slingShot.attach(ball.body);
        
     }
         if(keyIsDown (32) && source === "ball1"  ){

        Matter.Body.setPosition(ball1.body, {x: 100 , y: 450});
        slingShot1.attach(ball1.body);
         
     } 



}//draw


 function mouseDragged(){

        if (source === "ball"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});}
    
    if (source === "ball1"){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});}


    
}

function mouseReleased(){
    
    if (source === "ball"){
        source ="ball1"
        slingShot.fly();
        
        }else {
            source ="ball"
        slingShot1.fly();
        
        } 
        
}
     
function keyPressed(){

    

    if(keyCode === 27){ 
        gameState = "start"
   }
    if(keyCode === 8){
        gameState = "play"
    }


}
