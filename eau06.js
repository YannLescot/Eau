let string = process.argv
let stringMaj =''
let majusculeSurDeux =''
function RecupString (arg){
    for(let i = 2 ; i < arg.length ; i++){
        if (stringMaj !== ''){
            stringMaj += " ";
        }
        stringMaj += arg[i]
    }
}

function MajusculeSurDeux (arg) {
    for(let i = 0 , j = i+1; i === arg.length , j <= arg.length; i+=2,j+=2 ){
        
        majusculeSurDeux += arg[i].toUpperCase() + arg[j]
      
    }
}
RecupString(string)
MajusculeSurDeux(stringMaj)
console.log(stringMaj[5])
console.log(majusculeSurDeux)