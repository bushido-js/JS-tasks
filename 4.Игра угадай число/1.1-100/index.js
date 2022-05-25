//Компьютер загадывает число от 1 до 100, задача пользователю угадать число которое загадал компьютер.
// Если вводится число меньше - введите число побольше иначе - введите число поменьше


// Для начала я выполню эту задачу, тупо по условию
let area = document.getElementById('area');
let btn = document.getElementById('btn');
let answer = document.getElementById('answer');

let randNum = getRandom (1, 100);

btn.addEventListener('click', () => {
  let num = Number(area.value);
  if (num < randNum){
    answer.style.color = 'red';
    answer.textContent = 'Введите число побольше';
  } else if (num > randNum){
    answer.style.color = 'red';
    answer.textContent = 'Введите число поменьше';    
  } else if (num === randNum){
    answer.style.color = 'green';
    answer.textContent = 'Ебать вы угадали!';
  }
  area.value = '';
})



function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


