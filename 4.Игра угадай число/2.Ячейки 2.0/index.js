let game = document.getElementById('#game');
let field = document.querySelector('.field');

let size = 5; // два на два

let from = 1;
let to = size**2;
let arr = []; 
arr = createArr(from, to);
arr = shuffleArr(arr);
arr = chunkArr(arr);
createCells(arr, field)
console.log(arr);

//[[1,2], [3, 4]]
function createCells(arr, elem) {
  for (let i = 0; i < arr.length; i++){
    let tr = document.createElement('tr');
    console.log('тут1');
    for(let j = 0; j < arr[i].lenght; j++){
      let td = document.createElement('td');
      td.innerHTML = arr[i][j];
      tr.append(td);
      console.log('тут');
    }
    elem.append(tr);
  }
}

function createArr(from, to) {
  let arr = [];
  for ( let i = from; i <= to; i++){
    arr.push(i);
  }
  return arr;
}

function shuffleArr(arr) {
  let shuffleArr = [];
  for (let i = 0; arr.length > 0; i++){
    let random = getRandom(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    shuffleArr.push(elem);
  }
  return shuffleArr;
}

// [1, 2, 3, 4] 
// => [[1, 2], [3, 4]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ..25] 
// => [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10] ...]
function chunkArr(arr) {
  let newArr =[];
  let divisor = Math.sqrt(arr.length);
  for (let i = 0; i < divisor; i++ ){
    let arr1 = [];
    newArr.push(arr1);

    for(let k = 0; k < divisor; k++){
      newArr[i].push(arr.splice(0, 1)[0]);
    }
  }
  return newArr;
}




function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}