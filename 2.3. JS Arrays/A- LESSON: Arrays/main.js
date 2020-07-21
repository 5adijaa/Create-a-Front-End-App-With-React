// 1. Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

// 2. Create an Array
const hobbies = ['aa', 'oo', 'ee'];
console.log(hobbies)

// 3. Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// 4. Update Elements
let groceryList = ['bread', 'avocados', 'milk'];

// 5. Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils);

// 6. The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// 7. The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('cook dinner', 'mop floor');
console.log(chores);


// 8. The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores)


// 9. More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// 10. Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
const removeElement = newArr => {
  newArr.pop()
}
removeElement(concept);
console.log(concept);

// 11. Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
