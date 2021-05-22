class drop {
    constructor(x,y){
      super(x,y,10,10);
      this.drop = Bodies.ellipse(200,0);
      World.add(world,this.drop);
    }
  
    display() {
      
     
  
     if(this.body.position.y>400){
         this.body.postion.y=0;
     }
    }
  }
  