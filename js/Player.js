class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');//only referring to the playercount data
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({//calling i hv done here but i will use it in form.js
      playerCount: count
    });
  }

  //using the .set function we are creating DB field thru the code
  //the players get created using this update function
  update(){
    var playerIndex = "players/player" + this.index;//players is like an umbrella, it is holding all the players inside it
    //depending upon the index number
    //the 1st player joins and his name and index no gets concatenated(player1)+the distance covered
    database.ref(playerIndex).set({
      //the name gets stored in another Data field and also the distance
      //these info get saved in allplayers @39
      name:this.name,
      distance:this.distance
    });
  }

  //this is the static function that we created
  //because this static function will be called for each object(p1,p2,p3,p4)
  //we are calling this class in game.js when the game will be starting
  static getPlayerInfo(){//referring to the database entry of players @ 22
    //the players we have not created by ourselves in the DB,we created GS and PC
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
