let valeurMin = process.argv[2];
let valeurMax = process.argv[3];
let minMax =''

function Verifchiffre (valeur){
    if(valeur*1 <= 0 || valeur*1 ){
        return true
    }
    else{
        return false
    }
}


function MinMax (min, max){
    if(Verifchiffre(min) && Verifchiffre(max)){
        for (let i = min; i < max ; i++){
            if (minMax !== "") {
                minMax += " ";
              }
            minMax += i
        }
        console.log(minMax)
    }
    else{
        console.log('error')
    }
    
}

MinMax(valeurMin, valeurMax)