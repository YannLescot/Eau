let string = process.argv
let tableau =[]
let resultat = []
function RecupNb (arg){
for (let i = 2 ; i< arg.length ; i++){
    if (isNaN(arg[i])) {
        console.log(`error`)
        process.exit() // arrête le script avec le code d'erreur 
    }
    tableau[i-2] = arg[i]
}
}

function Calcul (tab){
    let k = 0;
    for (let i = 0 ; i < tab.length -1 ; i++){
        for (let j = i+1; j < tab.length ; j++){
            //Pour avoir un résultat toujours positif
            if((tab[i] - tab[j]) < 0){
                resultat[k] = (tab[i] - tab[j])* -1
            }
            else{
                resultat[k] = (tab[i] - tab[j])
            }
            k++;
        }
    }
}

function Mini (tab){
    let min = tab[0]
    for (let i = 1 ; i< tab.length ; i++){
        if (tab[i] < min){
            min = tab[i]
        }
    }
    console.log(min)
}
RecupNb(string)
Calcul(tableau)
Mini(resultat)