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
    result= "you win";
    console.log(result);
  }
  else{
    result= "you lose";
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
    result = "you win";
    console.log(result);
  }
  else {
    result = "you lose";
    console.log(result);
  }
  document.getElementById("resultshow").textContent = `${result}`;
};