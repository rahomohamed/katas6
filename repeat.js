let repeatNumbers = function(data) {
  let repeatedString = "";
  for (let arr of data) {
    for (let i = 0; i < (arr[1]); i++) {
      repeatedString = repeatedString + arr[0];
    }
    repeatedString = repeatedString + ",";
  }
  repeatedString = repeatedString.slice(0, -1);

  return repeatedString;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
