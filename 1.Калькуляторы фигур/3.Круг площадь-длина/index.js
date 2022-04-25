// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

const btn = document.getElementById('go1');
let input = document.getElementById('radius');
let areaS = document.getElementById('areaS');
let areaL = document.getElementById('areaL');

const pi = 3.14;

btn.addEventListener('click', () => {
  let rad = input.value;

  let square = pi * rad**2;
  let length = 2*pi*rad;

  areaS.value =square.toFixed(2);
  areaL.value = length.toFixed(2);
})


