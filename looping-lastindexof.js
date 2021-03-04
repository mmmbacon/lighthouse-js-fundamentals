function lastIndexOf(arr, val) {

  let lastIndexOf = 0;

  if(arr.length < 1 ){
    return -1;
  }

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === val) {
      lastIndexOf = x;
    }
  }

  if(arr.length > 1 && lastIndexOf === 0){
    return -1;
  }else if(arr.length === 1 && lastIndexOf === 0){
    return lastIndexOf;
  }

  return lastIndexOf;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([1], 1), "=?", 0);

