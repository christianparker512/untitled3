'use strict';

const cars = ['infinity', 'jaguar', 'hyundai'];

//splice will remove item from an array.
console.log(cars);
// const deletedCar = cars.splice(1,1)
// this saves the deleted item at the index of the array and replaces it with an item
const deletedCar = cars.splice(1,1, 'Nissan')
console.log(cars);
console.log(deletedCar);
