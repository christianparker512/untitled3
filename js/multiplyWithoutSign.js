'use strict';

function multiply (a,b){
  let answer = a;
  for (let i = 0; i <b-1; i++){
    answer = answer +=a;
  }
  return answer;
}
console.log(multiply(4,6));
