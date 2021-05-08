class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.8,
			friction:3.5,
			density:8.5
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(5);
			stroke("black");
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

