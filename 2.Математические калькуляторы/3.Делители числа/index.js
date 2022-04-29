const input = document.getElementById('a');
const btn = document.getElementById('btn');
const area = document.getElementById('area');

let arr = [];


btn.addEventListener('click', () => {
  area.value = '';
  arr = [];
  let number = Number(input.value);

  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      arr.push(String(i))
    }
    area.value = arr;
  }
})

