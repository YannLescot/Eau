let combinaison1 = ''
function Combinaison2Chiffres (){
    
            for (let i = 0; i < 100; i++) {
                for (let j = i + 1; j < 100; j++) {
                    if (combinaison1 !== ''){
                        combinaison1 += ",";
                    }
                    combinaison1 +=(`${i < 10 ? '0' + i : i } ${j < 10 ? '0' + j : j }`);      
                }
            }
      console.log(combinaison1)
}

Combinaison2Chiffres()