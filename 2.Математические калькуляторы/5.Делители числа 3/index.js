const input1 = document.getElementById('a');
const input2 = document.getElementById('b');
const btn = document.getElementById('btn');
const area = document.getElementById('area');

let arr = [];

// btn.addEventListener('click', () => {
//   area.value = '';
//   arr = [];
//   let a = Number(input1.value);
//   let b = Number(input2.value);
  
//   if ( a < 0 && b < 0) {
//     a = -a;
//     b = -b;
//   } else if ( b < 0 && a > 0) {
//     b = -b;
//   } else if ( a < 0 && b > 0 ) {
//     a = -a;
//   }

//   let c = Math.min(a, b);
  
//   for (i = 0; i <= c; i++) {
//     if (a % i === 0 && b % i === 0) {
//       arr.push(i);
//     }
//   }
//   // Теория для решения:
//   //Объект Math в Javascript не принимает в качестве аргумента ни одного массива. А вот с помощью синтаксиса spread такая передача массива становится возможной: массив расширяется на несколько аргументов всего одной строкой кода.
  
//   area.value = Math.max(...arr);
// })

// Решение с помощью функций, я думаю его можно считать усовершенствованным
btn.addEventListener('click', () => {
  let a = Number(input1.value);
  let b = Number(input2.value);
  if (a < 0 || b < 0){
    a = Math.abs(a);
    b = Math.abs(b);
  }

  // let greatestDivisors = (Math.max.apply(null, commonDivisors(a, b)));

  return area.value = Math.max(...commonDivisors(a, b));
})


function divisors (num) {
  let arr = [];
  for (let i = 1; i <= num; i++){
    if ( num % i === 0){
      arr.push(i);
    }
  }
  return arr;
}

function commonDivisors (a, b){
  let lowNum = Math.min(a, b);
  let upNum = Math.max(a, b);
  let arr = [];

  for (let elem of divisors(lowNum)){
    if (upNum % elem === 0){
      arr.push(elem)
    }
  }
  return arr;
}
