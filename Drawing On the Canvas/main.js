var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var canvasDraw = canvas.getContext('2d');

canvasDraw.fillStyle = 'rgba(255,110,0,1)';
canvasDraw.fillRect(100,100,100,100);
canvasDraw.fillStyle = 'rgba(165,10,10,1)';
canvasDraw.fillRect(200,200,100,100);
canvasDraw.fillStyle = 'rgba(255,110,0,1)';
canvasDraw.fillRect(300,300,100,100);

canvasDraw.beginPath()
canvasDraw.moveTo(100,200);
canvasDraw.lineTo(200,300);
canvasDraw.lineTo(300,400);

canvasDraw.moveTo(200,100);
canvasDraw.lineTo(300,200);
canvasDraw.lineTo(400,300);
canvasDraw.strokeStyle = "red";
canvasDraw.stroke();

canvasDraw.beginPath();
canvasDraw.arc(60,60,50,0,Math.PI*2,false);
canvasDraw.stroke();

for(var i=0; i<30; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    canvasDraw.beginPath();
    canvasDraw.arc(x,y,50,0,Math.PI*2,false);
    canvasDraw.strokeStyle = 'rgba(0,0,200,0.9)'
    canvasDraw.stroke();
}