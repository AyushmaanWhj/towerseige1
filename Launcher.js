class Launcher{

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 20

        }
        this.pointB = pointB; 
        this.bodyA=bodyA;
 
        this.Launcher = Matter.Constraint.create(options);
        World.add(world, this.Launcher);

    }

   
    fly(){
        this.Launcher.bodyA = null;
    }
    display() {
        if(this.Launcher.body){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;

        }
        
       
           

            
      
    }
    
}