//Don Seo. 12.10.2019. Final. Swap.js File
//get rando/m number and variable/


//create function to showimage based on random number
function showImg() {  
var imgs=new Array["images/mainTrain.jpg","images/image5.jpg","images/image6.jpg"];
var randomNumber = Math.floor(Math.random() * 3);
document.getElementById("pic").innerHTML=imgs[randomNumber];
setTimeout("showImg()", 1000);
}
window.onload=showImg;