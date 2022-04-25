// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

let length = document.getElementById('length');
let areaP = document.getElementById('areaP');
let areaS = document.getElementById('areaS');

let btn1 = document.getElementById('go1');

btn1.addEventListener('click', () => {
  let value = length.value;
  let square = value**2;
  let perimeter = value * 4;

  areaP.value = perimeter;
  areaS.value = square;
})


