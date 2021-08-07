'use strict';
const parkers = [
  {name: 'Chris', age: 50},
  {name: 'Lisa', age: 56},
  {name: 'Abby', age: 19}
];

const newParkers = parkers.map((parker,index) => parker);
console.log(newParkers);
