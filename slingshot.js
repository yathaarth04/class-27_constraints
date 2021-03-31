class slingshot{
    constructor(bodya,bodyb){
        var options={
            bodyA:bodya,
            bodyB:bodyb,
            stiffness:0.05,
            length:50
        }
    this.slingshot=Constraint.create(options)
    World.add(world,this.slingshot)
    console.log(this.slingshot)
    }
    display()
    {
    var bodya=this.slingshot.bodyA.position
    var bodyb=this.slingshot.bodyB.position
    push();
    strokeWeight(4)
    line(bodya.x,bodya.y,bodyb.x,bodyb.y)
    pop();
    }
    
    }