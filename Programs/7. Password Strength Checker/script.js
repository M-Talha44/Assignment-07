var a=prompt("Create a Password");
if (a.length>=8) {
    console.log("Strong Password");
} else if (a.length>=5 && length<=7) {
    console.log("Moderate Password");
} else if(a.length<5)  {
    console.log("Weak Password");
}