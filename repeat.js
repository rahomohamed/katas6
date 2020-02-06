let repeatNumbers = function(data) {
  let num = "";

  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      num += ", ";
    }
    for (let j = 0; j < data[i][1]; j++) { // if number is less than the second number iterate by 1 
      num += data[i][0];
    }
  }
  return num;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));