var a=prompt(" (Rock, Paper, Scissor) Player 1 Turn");
var b=prompt("Player 2 Turn") 
if (a==="Rock" && b==="Scissor") {
    console.log("Player 1 Win");
} else if(a==="Rock" && b==="Paper") {
    console.log("Player 2 Win");
} else if(a==="Rock" && b==="Rock"){
    console.log("It's a Tie");
}  else if(a==="Scissor" && b==="Rock") {
    console.log("Player 2 win");
} else if(a==="Scissor" && b==="Paper"){
    console.log("Player 1 Win");
}  else if(a==="Scissor" && b==="Scissor") {
    console.log("It's a Tie");
} else if(a==="Paper" && b==="Rock"){
    console.log("Player 1 Win");
} else if(a==="Paper" && b==="Scissor"){
    console.log("Player 2 Win");
}  else if(a==="Paper" && b==="Paper") {
    console.log("It's a Tie");
}    