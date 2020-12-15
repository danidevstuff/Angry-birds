class Log extends Base{
    constructor(x, y,height,angle) {
     
      super(x, y, 20 ,height);
      this.image = loadImage("log.png");

      Matter.Body.setAngle(this.body, angle);
     
    };
   
  };
  