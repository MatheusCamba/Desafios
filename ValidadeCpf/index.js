// Transformar o numero romano recebido como argumento em numero/string.
// Dicas ==> M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1

const romanNumbers = [
  { letter: "M", number: 1000 },
  { letter: "D", number: 500 },
  { letter: "C", number: 100 },
  { letter: "L", number: 50 },
  { letter: "X", number: 10 },
  { letter: "V", number: 5 },
  { letter: "I", number: 1 },
];

function romanToIn(letras) {
  const inString = letras.toUpperCase();
  const separate = inString.split("");
  const inNumbers = [];

  for (let i = 0; i < separate.length; i++) {
    for (let j = 0; j < romanNumbers.length; j++) {
      if (separate[i] == romanNumbers[j].letter) {
        inNumbers.push(romanNumbers[j].number);
      }
    }
  }

  let trueNumber = 0;
  inNumbers.forEach((number) => {
    trueNumber += number;
  });
  console.log(trueNumber);
  return inNumbers;
}

romanToIn("MXXDU"); // 1520 - A Letra "U" não é traduzida pois não se encontra na base de dados(romanNumbers).
romanToIn("LXVI"); // 66
romanToIn("MCLXXVI"); // 1176
romanToIn("XIV"); // 1176

// A FUNCAO romanToIn() TRANSFORMA O NUMERO ROMANO RECEBIDO EM NUMERO DECIMAL, CONTUDO, NOS CASOS DE NUMEROS COMO "XIV" = 14, NUMEROS QUE DEVEM SER DIMINUIDOS PARA FORMAR O VERDADEIRO NUMERO, ELE AINDA SOMA, OU SEJA, A FUNCAO RETORNARIA 16.

//A FUNCAO ABAIXO, romanToDecimal() TRANSFORMA A STRING CORRETAMENTE, OBSERVANDO O CASO ANTERIORMENTE DITO.

function romanToDecimal(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanUpper = roman.toUpperCase();
  let decimal = 0;

  for (let i = 0; i < romanUpper.length; i++) {
    const current = romanNumeralMap[romanUpper[i]];
    const next = romanNumeralMap[romanUpper[i + 1]];

    if (next && next > current) {
      decimal += next - current;
      i++;
    } else {
      decimal += current;
    }
  }
  return console.log(decimal);
}

romanToDecimal("xiv");
