function narcissistic(value) {
  // Code me to return true or false
  let soma = 0;
  let numArr = String(value)
    .split("")
    .map((num) => {
      return Number(num);
    });
  let digitos = numArr.length;
  for (let i = 0; i < digitos; i++) {
    let elevado = Math.pow(numArr[i], digitos);
    soma += elevado;
  }
  if (soma === value) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

narcissistic(28);

// function narcissistic(value) {
//   // Code me to return true or false
//   let soma = 0;
//   let numArr = value.toString();
//   let digitos = numArr.length;

//   //   console.log("Quantidade de digitos: " + digitos);
//   //   console.log(numArr);
//   for (let i = 0; i < digitos; i++) {
//     let numInteiro = parseInt(numArr[i]);
//     let numElevado = numInteiro ** digitos;

//     soma += numElevado;
//   }
//   if (soma === value) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }

// narcissistic(153);
