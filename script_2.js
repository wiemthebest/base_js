function factorielle(inputNumber) {
    let result = 1;
    for(let count = inputNumber; count >=1; count--){
         result = result * count;
      }
   
    return result;
  }
  inputNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
  console.log(factorielle(5));
