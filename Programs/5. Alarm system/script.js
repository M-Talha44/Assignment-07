var a=prompt("Is the door open? (yes or no)");
var b=prompt("Is motion detected? (yes or no)") 
if (a==="yes" && b==="no") {
    console.log("Alarm Triggered");
} else if(a==="no" && b==="yes") {
    console.log("Alarm Triggered");
} else if(a==="yes" && b==="yes"){
    console.log("Alarm Triggered");
}  else if(a==="no" && b==="no") {
    console.log("All Safe");
} 