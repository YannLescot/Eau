let string = process.argv;
let stringMaj = "";
let majusculeSurDeux = "";

function RecupString(arg) {
  for (let i = 2; i < arg.length; i++) {
    if (stringMaj !== "") {
      stringMaj += " ";
    }
    stringMaj += arg[i];
  }
}

/* isCharLetter(chr){
  Define if char is letter
  Return the result
  Regarder du côté des RegEx
}*/



function MajusculeSurDeux(arg) {
  /*Créer un index init à 0
  Forcer le premier charactere
  Si index pair, mettre en maj
  Si impair, mettre en min
  isCharLetter(arg[i]) === true dans ce cas, je fais l'action et j'augmente index
  si c'est false, je fais rien et j'augmente pas l'index
   aa,a Aa,A */
    if(isNaN(arg*1)){
        for (let i = 0, j = i + 1; i < arg.length && j < arg.length; i += 2, j += 2) {
            if (arg[j] === " ") {
              majusculeSurDeux += arg[i].toUpperCase() + arg[j] + arg[i + 2];
              i++;
              j++;
            } else if (arg[i] === " ") {
              majusculeSurDeux += arg[i] + arg[i + 1].toUpperCase() + arg[i + 2];
              i++;
              j++;
            } else {
              majusculeSurDeux += arg[i].toUpperCase() + arg[j];
            }
          }
          if (arg.length % 2 === 0) {
            majusculeSurDeux += arg[arg.length - 1].toUpperCase();
          }
          console.log(majusculeSurDeux);
    }
  else{
    console.log('error')
  }
  
}

RecupString(string);
MajusculeSurDeux(stringMaj);
