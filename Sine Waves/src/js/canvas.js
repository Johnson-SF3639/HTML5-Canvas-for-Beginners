import * as dat from 'dat.gui';

const gui = new dat.GUI();

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01
}

const strokeColor = {
  h:200,
  s:50,
  l:50
}

const backgroundColor = {
  r:0,
  g:0,
  b:0,
  a:0.01
}

const waveFolder = gui.addFolder('wave');
gui.add(wave, 'y', 0, canvas.height);
gui.add(wave, 'length', -0.01, 0.01);
gui.add(wave, 'amplitude', -300, 300);
gui.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

const strokeFolder = gui.addFolder('stroke');
gui.add(strokeColor, 'h', 0, 255);
gui.add(strokeColor, 's', 0, 100);
gui.add(strokeColor, 'l', 0, 100);
strokeFolder.open();

const backgroundFolder = gui.addFolder('background');
gui.add(backgroundColor, 'r', 0, 255);
gui.add(backgroundColor, 'g', 0, 255);
gui.add(backgroundColor, 'b', 0, 100);
gui.add(backgroundColor, 'a', 0, 10);
backgroundFolder.open();


var increament = wave.frequency;
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
  c.fillRect(0,0,canvas.width,canvas.height);
  c.beginPath()
  c.moveTo(0, canvas.height / 2)
  for (var i = 0; i < canvas.width; i++) {
    c.lineTo(i, ((wave.y) + Math.sin(i * wave.length + increament) * (wave.amplitude * Math.sin(increament))))
  }
  c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.random(increament))}, ${strokeColor.s}%, ${strokeColor.l}%)`
  c.stroke()
  increament += wave.frequency;
}

animate()