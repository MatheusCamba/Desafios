// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function changePosition(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b); //numeros impares
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

function ordernarArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function (a, b) {
    return a - b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }

  return array;
}

let array = [5, 8, 6, 3, 4]; // ==> [ 3, 4, 5, 6, 8 ]
// console.log(sortArray(array));
// console.log(3 % 2);
console.log(ordernarArray(array));
console.log(sortArray(array));

// let arr = [1,2,4,5,6,7,8,9,10,3];

// arr = changePosition(arr, 9, 3);

// console.log(arr); // [1,2,3,4,5,6,7,8,9,10]
