class Ground{

    constructor(x,y,width){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,width,20,ground_options)
          this.width=width;
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,20);
    }
}