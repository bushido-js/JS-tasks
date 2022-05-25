let boxes = document.querySelectorAll('box');
let wrapperBox = document.querySelector('wrapper-box')

let n1 = 0;
let n2 = 0;
addEventListener('click', function (event) {
  let obj = event.target;
  let rand = getRandom(1, 2);
  if (obj.classList == 'box'){
    if ( rand == 1){
      obj.style.backgroundColor = 'red';
      n1++;
    } else if (rand == 2) {
      obj.style.backgroundColor = 'green'
      n2++;
    }
  }
  if (n1 >= 20 && n2 < 20){
    document.write('Красная команда выйграла!');
  }
  if (n1 < 20 && n2 >= 20){
    document.write('Зелёная команда выйграла!');
  }
})

function getRandom (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
