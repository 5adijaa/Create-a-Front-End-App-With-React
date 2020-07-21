const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);


// We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes. This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)! Create a shorter-named variable, is2p2 that will be easier to work with, and assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
// Hmmm, if we forgot the original name of our function, is there a way we could figure it out? Use is2p2 to console.log() the name property of the function we assigned to is2p2. Check out the documentation if you need a hint. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
