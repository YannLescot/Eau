let arguments = process.argv
function InverserArgument (args){
    if(!args[2]){
        console.log('Erreur arguments')
    }
    else {
        let argumentInverse = ''
        for(let i=args.length-1  ; i>=2 ;i--){
             argumentInverse += `${args[i]} \n`   
            }
        console.log(argumentInverse)
    }
    
}

InverserArgument(arguments)
