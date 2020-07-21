let input = 'Turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  for (let vowelsIndex = 0; vowelsIndex< vowels.length; vowelsIndex++){
    if ( input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);

    if (input[inputIndex] === 'e'){
      resultArray.push('e');
    }
    if (input[inputIndex] === 'u'){
      resultArray.push('u');
    }
    }
  }
}

console.log(resultArray.join("").toUpperCase());
