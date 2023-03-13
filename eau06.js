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

function MajusculeSurDeux(arg) {
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
    }
  else{
    console.log('error')
  }
  
}

RecupString(string);
MajusculeSurDeux(stringMaj);
console.log(majusculeSurDeux);