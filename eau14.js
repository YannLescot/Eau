let string = process.argv;
let tableau = [];
let triAscii = "";
function Recup(arg) {
  let j = 0;
  for (let i = 2; i < arg.length; i++) {
    if (arg[i] <= 0 || arg[i] >= 0) {
      console.log(`error`);
      process.exit();
    }
    tableau[j] = arg[i];
    j++;
  }
}

function ValeurASCII(tab) {
  let k = 0;
  for (let i = tab.length; i > 0; i--) {
    for (let j = 0; j < tab.length - 1; j++) {
      while (tab[j].charCodeAt(k) === tab[j + 1].charCodeAt(k)) {
        k++;
      }
      if (tab[j].charCodeAt(k) > tab[j + 1].charCodeAt(k)) {
        let temp = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = temp;
        k === 0;
      }
    }
  }
  for (arg of tab) {
    if (triAscii !== "") {
      triAscii += " ";
    }
    triAscii += arg;
  }
  console.log(triAscii);
}

Recup(string);
ValeurASCII(tableau);
