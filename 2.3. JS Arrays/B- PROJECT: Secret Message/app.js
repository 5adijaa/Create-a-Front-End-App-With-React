let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage.length);

secretMessage.push('to', 'program');

secretMessage[7] = 'right';
//console.log(secretMessage.length);

secretMessage.shift();

secretMessage.unshift("Programming");

secretMessage.splice(6, 5, "know,");

secretMessage.join(" ");
console.log(secretMessage);


/* The two methods, pop() and shift() can give their values to a variable. This makes it easier for us to document the code…
lastStringInArray = secretMessage.pop();
firstStringInArray = secretMessage.shift();
The splice() method takes two integers as the first two arguments. */
