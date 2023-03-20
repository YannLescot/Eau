let argArray = process.argv
let recherche = process.argv[process.argv.length-1]

function CleanArgTableau(arr){
    let tableau =[]
    for(let i = 2 , j=0 ; i<arr.length-1; i++, j++){
        tableau[j] = arr[i]
    }
    return tableau;
}

function  GetSearchIndex(arr, str){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]===str){
            return i; 
            break
        }
        else if (i === arr.length-1){
            return -1;
        }
    }
}

console.log(Recherche(CleanArgTableau(argArray), recherche))
