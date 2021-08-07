'use strict';

const parkers = [
  {name: 'Chris', age: 50},
  {name: 'Lisa', age: 56},
  {name: 'Abby', age: 19}
];

parkers.sort((a,b)=>{
  if (a.age>b.age){
    return 1;
  } else {
    return -1;
  }
});
console.log(parkers);
