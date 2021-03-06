class Apple{
    constructor(x,y,r){
        var options={
            'isStatic':true,
            'restitution':0,
            'friction':1,
            'density':0.8
        }
        this.image=loadImage("apple2.png");
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