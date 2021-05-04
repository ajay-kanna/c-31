class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.traectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200) {
      var position = [this.body.position.x,this.body.position.y];
      this.traectory.push(position);


    }
    
    for (var i = 0;i<this.traectory.length;i++){
      image(this.smoke,this.traectory[i][0],this.traectory[i][1]);
    }
  }
}
