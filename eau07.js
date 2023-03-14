let string = process.argv;
let stringMaj = [];
let majuscule = "";
function RecupString(arg) {
  for (let i = 2, j = 0; i < arg.length; i++, j++) {
    stringMaj[j] = arg[i];
  }
}

function Majuscule1er(arg) {
    if(isNaN(arg[0]*1)){
        for (let i = 0; i < arg.length; i++) {
            if(majuscule !== "") {
                majuscule += " ";
              }
            majuscule += arg[i][0].toUpperCase();
            for (let j = 1; j < arg[i].length; j++) {
              majuscule += arg[i][j];
            }
          }
    console.log(majuscule)
    }
  else{
    console.log('error')
  }
}
RecupString(string);
Majuscule1er(stringMaj);
