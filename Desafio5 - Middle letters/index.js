/* Recebe uma palavra e devolve as duas letras do meio.
Exemplos: 

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("batata")); // retorna "ta"

// Outras resoluções

function middle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

function newMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}

console.log(newMiddle("matheus"));
