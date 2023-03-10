let string = process.argv;
let string1 = "";
let string2 = "";
let verif = "";
function SeparerString(string) {
  for (let i = 2; i < string.length - 1; i++) {
    string1 += string[i];
    if (string[i] == " ") {
      console.log(i);
      break;
    }
  }
  for (let i = 3; i <= string.length - 1; i++) {
    string2 += string[i];
  }
}

function isNum(string) {
  return /\d/.test(string);
}
function ComparerString(stringa, stringb) {
  if (stringa !== "" && stringb !== "") {
    if (isNum(stringa) || isNum(stringb)) {
      return "error";
    } else {
      for (
        let i = stringa.length - stringb.length, j = 0;
        i < stringa.length, j < stringb.length;
        i++, j++
      ) {
        if (stringa[i] !== stringb[j]) {
          return false;
        }
      }
      return true;
    }
  } else {
    return "error";
  }
}

SeparerString(string);
console.log(ComparerString(string1, string2));
