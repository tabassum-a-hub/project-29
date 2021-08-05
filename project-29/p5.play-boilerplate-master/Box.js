class Box {
  constructor(x, y){
   
      var options = {
         'restitution' : 0.8,
         'friction' : 1.0,
         'density' : 1.0
      }
      this.body = Bodies.rectangle(x,y,35,50,options);
      this.width =35;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("blue")
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  


