
   

class Drops {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1     
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }


    update(){
        if(this.rain.position.y>height){
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        // this.rain.display()
        }
    }


    display(){
        var pos = this.rain.position;
        ellipseMode(CENTER);
        fill("blue")
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,5,5);
    }
}
