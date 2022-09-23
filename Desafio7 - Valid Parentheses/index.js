// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// ESSA FUNCAO FUNCIONA MAS NAO PASSA EM TODOS OS TESTES
function validParentheses(parens) {
  let stringToArray = parens.split()

  if(stringToArray.includes('()')){
    return console.log(true)
  } else if(stringToArray == "") {
    return console.log(false)
  } else {
    return console.log(false)
  }
  // return console.log(stringToArray)
}



let string = ""

validParentheses(string)

// ESSA FUNCAO FUNCIONA MAS NAO PASSA EM TODOS OS TESTES

function validParentheses(parens) {
  parens = parens.split("");
  let stored = [];
  for (let i = 0; i < parens.length; i++){
    if (parens[i] == "(") {
      stored.push("(");
    } else {
      stored.pop();
    }
  }
  if (parens.length % 2 != 0 || parens[0] == ")" || stored.length != 0){
    return false;
  }
  return true;
}
