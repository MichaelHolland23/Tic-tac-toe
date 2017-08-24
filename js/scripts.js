function whichClicked(array1,array2,array3,clickedNum){
    array1.push(clickedNum);
    array2.push(clickedNum);
    array3.push(clickedNum);
};
function whichClicked2(array1,array2,clickedNum){
    array1.push(clickedNum);
    array2.push(clickedNum);
};
function whichClicked3(array1,array2,array3,array4,clickedNum){
    array1.push(clickedNum);
    array2.push(clickedNum);
    array3.push(clickedNum);
    array4.push(clickedNum);
};

function winCheck(array,name){
  if(array.length ===3){
    alert("Player " + name + " wins!! Congrats!");
    return true;
  }else{
    return false;
  };
};

//when array fills with 3 numbers, then player wins
function player(){
  this.down1 = [];
  this.down2 = [];
  this.down3 = [];
  this.over1 = [];
  this.over2 = [];
  this.over3 = [];
  this.diag1 = [];
  this.diag2 = [];
};

player.prototype.isWin = function (name,num, letter){
  if(winCheck(this.down1,name)){return true;};
  if(winCheck(this.down2,name)){return true;};
  if(winCheck(this.down3,name)){return true;};
  if(winCheck(this.over1,name)){return true;};
  if(winCheck(this.over2,name)){return true;};
  if(winCheck(this.over3,name)){return true;};
  if(winCheck(this.diag1,name)){return true;};
  if(winCheck(this.diag2,name)){return true;};
};

player.prototype.spaceAdd = function (clickedBox) {
  if(clickedBox===1){
    whichClicked(this.down1,this.over1,this.diag1,1);}
  if(clickedBox===2){
    whichClicked2(this.down1,this.over2,2);}
  if(clickedBox===3){
    whichClicked(this.down1,this.over3,this.diag2,3);}
  if(clickedBox===4){
    whichClicked2(this.down2,this.over1,4);}
  if(clickedBox===5){
    whichClicked3(this.down2,this.over2,this.diag1,this.diag2,5);}
  if(clickedBox===6){
    whichClicked2(this.down2,this.over3,6);}
  if(clickedBox===7){
    whichClicked(this.down3,this.over1,this.diag2,7);}
  if(clickedBox===8){
    whichClicked2(this.down3,this.over2,8);}
  if(clickedBox===9){
    whichClicked(this.down3,this.over3,this.diag1,9);}
};

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function resetGame(bool){
  if(bool){
    $("div#playAgain").append("<button class='btn btn-info' onclick='window.location.reload();'>Play again?</button>");
  }
}

function catsGame(gameCount){
  if(gameCount ===9){
    alert("Cat's Game (=^.^=)");
    window.location.reload();
  }
};

function clickSpace(num,letter,whosTurn){
  $("div#space"+num+"").append("<img src='img/"+letter+".png'>");
  whosTurn.spaceAdd(num);
  return 1;
};

$(document).ready(function(event){

  var playerX = new player();
  var playerO = new player();
  var gameCount = 0;


  $("div#space1").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(1,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(1,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space2").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(2,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(2,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space3").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(3,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(3,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space4").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(4,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(4,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space5").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(5,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(5,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space6").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(6,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(6,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space7").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(7,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(7,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space8").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(8,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(8,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });
  $("div#space9").click(function(event) {
    if(isEven(gameCount)){
      gameCount += clickSpace(9,"x",playerX);
      resetGame(playerX.isWin("x"));
      catsGame(gameCount);
    }else{
      gameCount += clickSpace(9,"o",playerO);
      resetGame(playerO.isWin("o"));
      catsGame(gameCount);
    }
  });

});
