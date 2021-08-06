'use strict';

const parkers = [
  {name: 'Chris', age: 50},
  {name: 'Lisa', age: 56},
  {name: 'Abby', age: 19}
]

parkers.forEach(parker =>{console.log(parker.name)});
parkers.forEach(parker =>{console.log(parker.age)});

const parker = parkers.find(parker => parker.age ==19);
console.log(parker)
