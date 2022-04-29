
const input1 = document.getElementById('a');
const input2 = document.getElementById('b');
const btn = document.getElementById('btn');
const area = document.getElementById('area');

let arr = [];

btn.addEventListener('click', () => {
  area.value = '';
  arr = [];
  let a = Number(input1.value);
  let b = Number(input2.value);
  
  if ( a < 0 && b < 0) {
    a = -a;
    b = -b;
  } else if ( b < 0 && a > 0) {
    b = -b;
  } else if ( a < 0 && b > 0 ) {
    a = -a;
  }
  
  let c = Math.min(a, b);
  
  for (i = 0; i <= c; i++) {
    if (a % i === 0 && b % i === 0) {
      arr.push(i);
    }
    area.value = arr;
  }
})


  // Ниже решение, без использования Math функции, если будем её использовать код сокращается в разы

  //Ниже решение без отрицательных вводных

    //   btn.addEventListener('click', () => {
    //     area.value = '';
    //     arr = [];
    //     let a = input1.value;
    //     let b = input2.value;
        
  
    //     if (a < b) {
    //       for (let i = 0; i <= Number(a); i++) {
    //         if ( a % i === 0 && b % i === 0) {
    //           arr.push(i)
    //         }
    //         area.value = arr
    //       }
    //     } else if (a > b) {
    //       for (let i = 0; i <= Number(b); i++) {
    //         if ( a % i === 0 && b % i === 0) {
    //           arr.push(i)
    //         }
    //         area.value = arr
    //       }
    //     } else if (a == b) {
    //       for (let i = 0; i <= Number(b); i++) {
    //         if ( a % i === 0 && b % i === 0) {
    //           arr.push(i)
    //         }
    //         area.value = arr
    //       }
    //     }
    // })