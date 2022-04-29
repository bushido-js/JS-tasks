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
  }
  
  area.value = Math.min(...arr);
})