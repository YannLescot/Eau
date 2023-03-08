let argument = process.argv[2]
let suiteFibonacci = [0,1]
function SuiteFibonacci (argv){
    if(argv > -1){
        for (let i = 2 ; i < 100 ; i++){
            suiteFibonacci[i] = suiteFibonacci[i-1] + suiteFibonacci[i-2]
        }
        console.log(suiteFibonacci[argv])
    }
    else{
       console.log('erreur argument')
    }
}
SuiteFibonacci(argument)