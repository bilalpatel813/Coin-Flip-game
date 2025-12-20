 console.log('Hello World!');
 let computer = Math.random();
 let computerMove;
 let result;
document.getElementById("head" ).onclick= function(){
  
  let computerMove;
  let result;
  if(computer<=1/2){
    computerMove="heads"
  }
  else{
    computerMove="tails"
  }
  if(computerMove==="heads"){
    result= "YOU WIN! ";
    console.log(result);
  }
  else{
    result= "YOU LOSE";
    console.log(result);
  }
  document.getElementById("resultshow").textContent= `${result}`; 
};
document.getElementById("tail").onclick = function() {
  
  let computerMove;
  let result;
  if (computer < 1) {
    computerMove = "tails"
  }
  else {
    computerMove = "heads"
  }
  if (computerMove === "tails") {
    result = "YOU WIN!";
    console.log(result);
  }
  else {
    result = "YOU LOSE";
    console.log(result);
  }
  document.getElementById("resultshow").textContent = `${result}`;
};