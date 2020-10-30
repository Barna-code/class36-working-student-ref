class Form {
//this in every line is refering to the form object
//that is the input/button/greeting
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }

  //this hide function is written bcz when gamestate will go from start to play
  //i want the complete form to hide
  //form is an object of the form class
  //threfore this hide  functions written down will not work in game class
  //so i have to make another hide function
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    //=>i am writing this so that it refers to the form class
    //if not then it is going to refer to the
    this.button.mousePressed(()=>{

      //operating with inbuilt hide function
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();//playername gets stored in a var
      playerCount+=1;
      player.index = playerCount;
      player.update();//here it is updated
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
