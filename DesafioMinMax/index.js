//Achar o minimo de dias para ver o filme

function acharMinimoDeDias(duracoes) {
  // Write your code here

  //ordenando os filmes
  let arr = duracoes.sort((a, b) => a - b);

  //inicialialização da contagem dos dias
  let dias = 0;

  //verificação dos filmes que ocupam um dia inteiro e remove-lo da lista
  for (let i = 0; i < arr[i]; i++) {
    if (arr[i] > 1.99) {
      dias++;
      arr.splice(i, 1);
    }
  }

  //verificar se a quantidade dos filmes é par para  a soma e remove-lo da lista
  if (arr.length % 2 !== 0) {
    arr.pop();
    dias++;
  }

  //percorrer o array para calcular a soma
  while (arr.length > 0) {
    //verificar o filme menor com o filme maior para a soma
    if (arr[0] + arr[arr.length - 1] <= 3) {
      dias++;

      arr.shift();
      arr.pop();
    } else {
      //tira o maior filme que está impedindo a soma
      arr.pop();
      dias++;
    }
  }
  //retorno do resultado
  return dias;
}
