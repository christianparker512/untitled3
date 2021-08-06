'use strict';

const parkers = [
  {name: 'Chris', age: 50},
  {name: 'Lisa', age: 50},
  {name: 'Abby', age: 19}
]

const oldParkers = parkers.filter(parker => parker.age == 50);
console.log(oldParkers);
