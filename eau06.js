let string = process.argv
let stringMaj =''
function MajusculeSurDeux (arg){
    for(let i = 2 ; i < arg.length ; i++){
        stringMaj += arg[i]
    }
}
MajusculeSurDeux(string)
console.log(stringMaj)