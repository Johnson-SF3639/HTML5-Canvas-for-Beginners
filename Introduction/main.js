var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var canvasDraw = canvas.getContext('2d');

canvasDraw.fillRect(100,100,100,100);
canvasDraw.fillRect(200,200,100,100);
canvasDraw.fillRect(300,300,100,100);
