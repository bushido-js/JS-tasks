//Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

let inputA = document.getElementById('a');
let inputB = document.getElementById('b');
let inputC = document.getElementById('c');
let area = document.getElementById('area');

const btn = document.getElementById('btn');

let x1;
let x2;

btn.addEventListener('click', () => {
  let a = Number(inputA.value);
  let b = Number(inputB.value);
  let c = Number(inputC.value);

  if (Boolean(a === 0)) {
    area.value = 'Ошибка';
    alert('Измените значение "а", "а" не должен быть равен 0!'); 
    throw new Error ('a не должен быть равен 0');
  };

  let D = b**2 - 4*a*c; //Находим дискриминант
  
  if (D < 0) {
    area.value = 'Корней нет'
  } else if (D === 0) {
    x1 = (-b) / (2 * a);
    area.value = 'x1 = ' + x1;
  } else if (D > 0) {
    x1 = ((-b) + D**(1/2)) / (2 * a);
    x2 = ((-b) - D**(1/2)) / (2 * a);
    area.value = 'x1 = ' + x1.toFixed(2) + ', ' + 'x2 = ' + x2.toFixed(2);
  }
})

