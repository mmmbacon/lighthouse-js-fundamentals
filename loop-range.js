function range(start, end, step) {
  let arr = [];

  if(start === undefined || end === undefined || step === undefined){
    return arr;
  }

  if(start > end){
    return arr;
  }

  if(step == 0 || Math.sign(step) == -1){
    return arr;
  }

  if(start < -1000 || end > 1000){
    return arr;
  }

  for (let x = start; x <= end; x += step) {
    arr.push(x);
  }

  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));