function upper(string) {
  //...
  let arrayS = string.split(" ");
  // console.log(arrayS);

  for (let i = 0; i < arrayS.length; i++) {
    arrayS[i] = arrayS[i].charAt(0).toUpperCase() + arrayS[i].slice(1);
    // console.log(arrayS[i]);
  }
  const texto = arrayS.join(" ");
  return console.log(texto);
}

let phrase = "How can mirrors be real if our eyes aren't real";
upper(phrase);
