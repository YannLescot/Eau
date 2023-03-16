let string = process.argv;
let tableau = [];
function Recup(arg) {
  let j = 0;
  for (let i = 2; i < arg.length; i++) {
    if (arg[i]<= 0 || arg[i]>= 0) {
      console.log(`error`);
      process.exit(); 
    }
    tableau[j] = arg[i];
    j++;
  }
}