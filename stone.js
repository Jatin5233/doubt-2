class Stone{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':0.6
        }
        this.image=loadImage("PhysicSeBadla.png");
        this.x=x;
        this.y=y;
        this.r=r;
      this.body=  Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
    rotate(angle);

        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();

    }
};