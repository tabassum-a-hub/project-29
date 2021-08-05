class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.Polygon = Bodies.circle(50,200,20)
        this.image=loadImage("polygon.png")
        World.add(world, this.polygon);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){

        imageMode(CENTER);
        image (polygon.png,polygon.position.x,polygon.position.y,40,40);
       
            
           
            
           
        
        }
    
}