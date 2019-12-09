var randomNumber = Math.floor(Math.random() * 2);

function showImg() {  
if (randomNumber == 0) {
    document.getElementById("3pic").src = "mainTrain.jpg"
} else if (randomNumber == 1) {
    document.getElementById("3pic").src = "image5.jpg"
} else {
    document.getElementById("3pic").src = "image6.jpg"
}
function startTimer() {
    setInterval(showImg,3);
}}