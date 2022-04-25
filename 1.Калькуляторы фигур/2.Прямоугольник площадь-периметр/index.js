// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

let length = document.getElementById('length');
let width = document.getElementById('width');
let areaP = document.getElementById('areaP');
let areaS = document.getElementById('areaS');

let btn1 = document.getElementById('go1');

btn1.addEventListener('click', () => {
  let valueLength = length.value;
  let valueWidth = width.value;
  let perimeter = 2*valueLength + 2*valueWidth;
  let square = valueLength * valueWidth;

  areaP.value = perimeter;
  areaS.value = square;
})


