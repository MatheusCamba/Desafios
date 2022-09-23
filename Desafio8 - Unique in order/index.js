// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//TENTANDO
var uniqueInOrderMe = function(iterable){
  if(typeof iterable === 'string'){
    iterable = iterable.split('')
  } else if(typeof iterable === 'array'){
    iterable = iterable
  }
  
  let removeRepeat = iterable.filter((el, i) => {
    return iterable.indexOf(el) === i;
  })

  return removeRepeat
}

// uniqueInOrderMe('ABBCcAD')

//METODO 1
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return console.log(result)
}

// uniqueInOrder('AAAABBBCCDAABBB')

//METODO 2
var uniqueInOrder3 = function(iterable){
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
  
  let result = iterable.filter(function(e, i, arr) {
    return console.log(e !== arr[i-1])
  });
  
  return console.log(result)
}

uniqueInOrder3([1,2,2,3,3])