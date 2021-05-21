// var button = document.getElementById("enter");
// var input = document.getElementById("usertype");
// var ul = document.querySelector("ul");


// // Magreturn para hindi are magexecute 
// function inputlength(){
//    return input.value.length;
// }
// function repeated_code(){

//     var li = document.createElement("li");
//     // if input lang ang inilagay sa baba ay null ang lalabas na results 
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li)
//     input.value = "";
//    }


// button.addEventListener("click", function(){
//     if (inputlength()>2){
//     repeated_code();
// }
// })
// input.addEventListener("keypress", function(press){
//     // console.log(input.value);
//     if (inputlength()>2 && press.keyCode === 13){
//     repeated_code();
// }
// })
var css = document.querySelector("h3");
// sa class nilalagayan (.) bago ang pangalan nung class 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// sa id no need to use (.) 
var body = document.getElementById("background");

color1.addEventListener("input",function(){
    body.style.background = 
        "linear-gradient (to bottom right, " 
        + color1.value 
        + "," 
        + color2.value 
        + "," 
        + ")";
        console.log(color1.value);
    })

color2.addEventListener("input",function(){
    console.log(color2.value);
}) 