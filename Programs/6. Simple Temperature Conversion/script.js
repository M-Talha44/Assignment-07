var type=prompt("choose a conversion type: \n 1. For Celsius to Fahrenheit \n 2. For Fahrenheit to Celsius.");
var temp=prompt("Temperature");
if (type==1) {
    console.log(temp*(9/5)+32);
} else if(type==2){
    console.log((temp-32)*5/9);
} else{
    console.log("Invalid Number \n put \n 1. For Celsius to Fahrenheit \n 2. For Fahrenheit to Celsius.");
    
}