'use strict';
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]



const factors = [1,2,3,4,5,6,7,8,9];

const product = factors.map(x => x * 3);

console.log(product);

const numbers = [45,4,9,16,25];

let answer = "";
for (let x in numbers){
  answer += numbers[x] *3 + "<br>";
}

console.log(answer);
