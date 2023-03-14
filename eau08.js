let string = process.argv;
let stringVerif = "";

function RecupString(arg) {
    for (let i = 2; i < arg.length; i++) {
      if (stringVerif !== "") {
        stringVerif += " ";
      }
      stringVerif += arg[i];
    }
  }
  
function Verifchiffre (arg){
    if(arg*1 <= 0 || arg*1 ){
        return true
    }
    else{
        return false
    }
}

RecupString(string)
console.log(Verifchiffre(stringVerif))
