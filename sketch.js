var fish;
var picture;
var backgroundImg;
var score, dot1, dot2,dot3,dot4,edges;
var goalGroup;

function preload(){
picture=loadImage("fish.png")
backgroundImg=loadImage("background.jpg")
dot1=loadImage("dot1.png")
dot2=loadImage("dot2.png")
dot3=loadImage("dot3.png")
dot4=loadImage("dot4.png")
}

function setup(){
    createCanvas(1100,479)
    fish=createSprite(160,350,20,20)
    fish.addImage(picture)
    fish.scale=(0.7)
    score=0
    goalGroup=createGroup()
    
}

function draw(){
    background(backgroundImg)
    fill("black")
    text("score:"+score,1000,100)

    if(keyDown("UP_ARROW")){
        fish.velocityY=-2
      }

      if(keyDown("DOWN_ARROW")){
          fish.velocityY=+2
      }

      edges=createEdgeSprites()
      fish.bounceOff(edges)
    dot()
    if(goalGroup.isTouching(fish)){

        score=score+1
        goalGroup.destroyEach()
    }
   drawSprites()
}

function dot(){
    if(frameCount%100==0){
        var goal=createSprite(1100,10,5,5)
        goal.velocityX=-4
        goal.y=Math.round(random(10,300))
        var a=Math.round(random(1,4))
        if(a==1){
            goal.scale=0.2
            goal.addImage(dot1)
        }
        else if(a==2){
            goal.scale=0.1
            goal.addImage(dot2)
        }
        else if(a==3){
            goal.scale=0.04
            goal.addImage(dot3)
        }
        else if(a==4){
            goal.scale=0.05
            goal.addImage(dot4)
        }
       goalGroup.add(goal)
    }

}