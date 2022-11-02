import utils, { distance } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Circle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let circle1,circle2;
function init() {
  circle1 = new Circle(innerWidth/2,innerHeight/2,100,'black');
  circle2= new Circle(undefined,undefined,30,'red');
  // for (let i = 0; i < 400; i++) {
    // objects.push()
  // }
}

function getDistance(x1,y1,x2,y2){
  var xDistance = x1-x2;
  var yDistance = y1-y2;
  return (Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2)));
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  
  if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius){
    circle1.color = "red";
  }else{
    circle1.color = "blue";
  }
  console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y));

  // objects.forEach(object => {
    circle1.update()
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update()

  // })
}

init()
animate()
