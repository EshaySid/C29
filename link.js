class Link{
    constructor(A,B){

console.log("Link"+A.body);

        var lastRope=A.bodies.length-2
        console.log("LastRope"+lastRope);
        var options={
            stiffness:0.01,
            pointA:{x:0,y:0},
            length:-10,
            bodyA:A[lastRope],
            bodyB:B,
            pointB:{x:0,y:0},
        }

        this.connection=Constraint.create(options);
        World.add(world,this.connection);

        

    }
}