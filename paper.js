class Paper {
    constructor(x,y,r) {
      var options = {
          restitution:0.1,
          friction:1.5,
          density:1.2,
      }
      this.r=r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("yellow");
      image(this.image,0, 0, this.r, this.r);
      pop()
    }
  };
