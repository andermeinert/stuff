const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 4;

var myButton = document.createElement("button");
myButton.innerHTML = "Draw";
document.body.appendChild(myButton);

const coords = {startX:100, startY:100, endX:150, endY:50}

myButton.addEventListener("click", function() {
    drawLine(coords.startX, coords.startY, coords.endX, coords.endY);
});

function drawLine(startX, startY, endX, endY) {
    ctx.beginPath()
    ctx.moveTo(startX,startY)
    ctx.lineTo(endX,endY)
    ctx.stroke()
}