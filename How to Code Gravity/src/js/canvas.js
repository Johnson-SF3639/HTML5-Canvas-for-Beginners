import utils, { randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

var colorArray=['red','blue','green','yellow','white','black','pink','lightblue','orange','navy','aqua'];
// const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
var gravity = 1;
var friction = 0.89;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('click',function(){
  init();
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Ball
class Ball {
  constructor(x, y,dx, dy,radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.dx = dx;
    this.radius = radius
    this.color =color;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    if(this.y+ this.radius + this.dy > canvas.height){
      this.dy = -this.dy * friction;
    }else{
      this.dy += gravity; 
    }
    
    if(this.x+ this.radius + this.dx > canvas.width || this.x-this.radius <= 0){
      this.dx = -this.dx;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw()
  }
}

// Implementation
let ballArray;
function init() {
  ballArray = [];
  for (let i = 0; i < 400; i++) {
    var radius = randomIntFromRange(10,20);
    var x = randomIntFromRange(0,canvas.width-radius);
    var dx = randomIntFromRange(-2,2);
    var dy = randomIntFromRange(-2,2);
    var y = randomIntFromRange(0,canvas.height-radius);
    var color = randomColor(colorArray);
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
  console.log(ballArray);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  ballArray.forEach(object => {
    object.update()
  })
}

init()
animate()
