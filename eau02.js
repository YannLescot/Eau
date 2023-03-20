let arguments = process.argv

function IsArgValid(arg){
        if(!args[2]){
        return false;
    }
    return true;
}

function InverserArgument (args){
        let argumentInverse = ''
        for(let i=args.length-1  ; i>=2 ;i--){
             argumentInverse += `${args[i]} \n`   
            }
        return argumentInverse;
}

IsArgValid(arguments) === true ? console.log(InverserArgument(arguments)) : console.log("Error during argument check")
