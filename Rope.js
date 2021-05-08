class Rope{
	constructor(body,point)
	{
		
		var options={
			bodyA:body,
			pointB:point,
			length:200,
			stiffness:0.9
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.pointB;

		strokeWeight(4);
        stroke(0);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}