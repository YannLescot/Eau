let string = process.argv
let tableau =[]
let recherche = process.argv[process.argv.length-1]

function Tableau (arg){
    for(let i = 2 , j=0 ; i<arg.length-1; i++, j++){
        tableau[j] = arg[i]
    }
}

function Recherche (arg){
    for(let i = 0 ; i<arg.length; i++){
        if(arg[i]===recherche){
            console.log(i) 
            break
        }
        else if (i === arg.length-1){
            console.log(-1)
        }
    }
}
Tableau(string)
Recherche(tableau)