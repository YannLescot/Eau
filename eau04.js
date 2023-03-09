let argument = process.argv[2] * 1;
function EstPremier(arg) {
    for (let i=2 ; i<arg ; i++){
        if (arg%i === 0){
            return false
        } 
    }
    return true
}

function PremierSuivant(arg){
  if (arg < 2 || isNaN(arg)) {
    console.log(-1)
  }
  else{
    for(let i = arg+1 ; ;i++){
      if(EstPremier(i)){
        console.log(i)
        break
      }
    }
  }
  
}
PremierSuivant(argument)