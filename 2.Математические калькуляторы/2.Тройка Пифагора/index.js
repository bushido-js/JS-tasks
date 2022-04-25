/* Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных. */

let aValue = document.getElementById('a');
let bValue = document.getElementById('b');
let cValue = document.getElementById('c');
let area = document.getElementById('area');

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let a = Number(aValue.value);
  let b = Number(bValue.value);
  let c = Number(cValue.value);
  
  if ((a**2) === (b**2) + (c**2)) {
    area.value = 'Да';
  } else if ((b**2) === (a**2) + (c**2)) {
    area.value = 'Да';
  } else if ((c**2) === (b**2) + (a**2)) {
    area.value = 'Да';
  } else {
    area.value = 'Нет';
  }
})

