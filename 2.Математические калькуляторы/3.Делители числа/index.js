const input = document.getElementById('a');
const btn = document.getElementById('btn');
const area = document.getElementById('area');

let sum = 0;

btn.addEventListener('click', () => {
  area.value = '';
  let number = Number(input.value);

  for (let i = 0; i <= number; i++) {
    if ((number % i) === 0) {
      area.value += (String(i) + '. ');
    }
  }
})
