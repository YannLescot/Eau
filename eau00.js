let combinaison = ''

function Combinaison3Chiffres (cbn){
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
          for (let k = j + 1; k < 10; k++) {
                if (cbn !== ''){
                    cbn += ",";
                }
              cbn +=(`${i}${j}${k}`);
        }
      }
}
return(cbn)
}

console.log(Combinaison3Chiffres(combinaison))
