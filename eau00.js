let combinaison = ''
function Combinaison3Chiffres (){
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
          for (let k = j + 1; k < 10; k++) {
                if (combinaison !== ''){
                    combinaison += ",";
                }
              combinaison +=(`${i}${j}${k}`);
        }
      }
}
console.log(combinaison)
}

Combinaison3Chiffres()