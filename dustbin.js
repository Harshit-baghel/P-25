class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.w=200;
        this.h=213;
        this.t=20;
      this.image=loadImage("dustbingreen.png")
        this.bbody = Bodies.rectangle(x,y,this.w,this.t,options);       
        World.add(world, this.bbody);
        this.lbody = Bodies.rectangle(x-this.w/2,y-this.h/2,this.t,this.h,options);       
        World.add(world, this.lbody);
        this.rbody = Bodies.rectangle(x+this.w/2,y-this.h/2,this.t,this.h,options);       
        World.add(world, this.rbody);
      }
      display(){
        
        var bpos =this.bbody.position;
        var lpos =this.lbody.position;
        var rpos =this.rbody.position;
        push()
        translate(bpos.x,bpos.y+10)
        imageMode(CENTER);
        fill("yellow");
        image(this.image,0,-this.h/2 , this.w, this.h);
        pop()

        push()
        translate(lpos.x,lpos.y)
        rectMode(CENTER);
        fill("yellow");
        //rect(0, 0, this.t, this.h);
        pop()

        push()
        translate(rpos.x,rpos.y)
        rotate(-1*this.bbody.angle)
        rectMode(CENTER);
        fill("yellow");
        //rect(0, 0, this.t, this.h);
        pop()
      }
    };
  