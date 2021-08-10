function multiply (a,b){
  let sum = 0;
  let bucket = 0;
  let addition = Math.abs(a);
  let times = Math.abs(b);

  if (a<b){
    addition = b;
    times = a;
  }

  for (let i = 0; i<times; i++){
    bucket +=1;
    sum += addition;
  }

  console.log(bucket);
  return sum;
}
//tests
console.log(multiply(2,2));

console.log(multiply(10000000,5));
console.log(multiply(5,10000000));
