class Chain{
    constructor(object1, object2){
        var option = {
            bodyA:object1,
            bodyB:object2,
            stiffness:0.04,
            length:10
        }
        this.chain = Constraint.create(option);
        World.add(world, this.chain)
    }

    display(){
        //name spacing
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
} 