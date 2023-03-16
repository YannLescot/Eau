let string = process.argv;
let tableau = [];
function RecupNb(arg) {
  let j = 0;
  for (let i = 2; i < arg.length; i++) {
    if (isNaN(arg[i])) {
      console.log(`error`);
      process.exit(); // arrête le script avec le code d'erreur
    }
    tableau[j] = arg[i];
    j++;
  }
}

function TriSelection(tab) {
  for (let i = 0; i < tab.length; i++) {
    let min = i;
    for (let j = i + 1; j < tab.length; j++) {
      if (Number(tab[j]) < Number(tab[min])) {
        min = j;
      }
    }
    let tmp = tab[i];
    tab[i] = tab[min];
    tab[min] = tmp;
  }
  console.log(tab);
}

RecupNb(string);
TriSelection(tableau);