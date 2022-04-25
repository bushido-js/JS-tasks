// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

const btn = document.getElementById('go1');
let aInput = document.getElementById('a');
let bInput = document.getElementById('b');
let cInput = document.getElementById('c');
let areaS = document.getElementById('areaS');



btn.addEventListener('click', () => {
  let a = Number(aInput.value);
  let b = Number(bInput.value);
  let c = Number(cInput.value);

  let p = (a + b + c) / 2 ; //Полупериметр
  let square = (p * (p - a) * (p - b) * (p - c))** (1/2);

  areaS.value = square.toFixed(3);
});


