// Sua tarefa é classificar uma determinada string. Cada palavra na string conterá um único número. Este número é a posição que a palavra deve ter no resultado.

// Nota: Os números podem ser de 1 a 9. Portanto, 1 será a primeira palavra (não 0).

// Se a string de entrada estiver vazia, retorne uma string vazia. As palavras na String de entrada conterão apenas números consecutivos válidos.

// Exemplos
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
  //transformar string em array
  const arrayWords = words.split(" ");
  const newArray = [];

  //verificar se cada letra é realmente uma letra
  //se nao for, coloca a palavra e o numero dentro de um array(newArray)
  arrayWords.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word.charAt(i))) {
        newArray.push([word, word.charAt(i)]);
      }
    }
  });
  //   console.log(newArray);

  //coloca em ordem o novo array, baseado no numero
  let sortArray = newArray.sort((a, b) => {
    return a[1] - b[1];
  });

  console.log(sortArray);
  let arrayfinal = [];

  //coloca cada palavra do sortArray dentro de um outro arrayFinal
  sortArray.forEach((item) => {
    arrayfinal.push(item[0]);
  });

  //transforma o arrayFinal em string adicionando espaço
  let final = arrayfinal.join(" ");

  return console.log(final);
}

let frase = "is2 Thi1s T4est 3a";
order(frase);

//Outras resolucoes
// function order(words){

//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }

// function order(words){
//   var array = words.split(' ');
//   var sortedArray = [];
//   for(i = 0; i <= array.length; i++) {
//     for(j = 0; j < array.length; j++) {
//       if(array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(' ');
// }
