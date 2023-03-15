let string = process.argv
let tableau =[]
let resultat = []

function RecupNb (arg){
for (let i = 2 ; i< arg.length ; i++){
    tableau[i-2] = arg[i]
}
}

function Calcul (tab){
    for (let i = 0 ; i < tab.length -1 ; i++){
        for (let j = i+1 ; j < tab.length  ; j++){
            if(resultat !== "") {
                resultat += " ";
              }//Pour avoir un résultat toujours positif
              if((tab[i] - tab[j]) < 0){
                resultat += (tab[i] - tab[j])* -1

              }
              else{
                resultat += tab[i] - tab[j]

              }
            
        }
    }
}

function Mini (tab){
    let mini =[]
    
}
RecupNb(string)
Calcul(tableau)
console.log(resultat)