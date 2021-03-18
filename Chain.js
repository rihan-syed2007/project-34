class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5          
        }
       
        this.chain1 = Constraint.create(options);
        World.add(world, this.chain1);
    }
   
   show(){

            var pointA = this.chain1.bodyA.position;
            var pointB = this.chain1.bodyB.position;
            stroke(0);
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}