// regular expression
// pattern matching technique

// regex is always start and end with '/' (forward slash)
// between those '/' will be count as a regex


// exec() - Returns result in a arrya or null
// -		oldvalue.exec(newvalue)
// test() - Returns only true/false value 
// match() - different from exec() method
// -		newvalue.match(oldvalue)
let regular;

regular = /hello/;
regular = /hello/i;

console.log(regular);
console.log(regular.source);

// let's match 2 words with regex, it's case sensetive
str = "HELLO";

let result = regular.exec(str);

console.log(result);  // it shows null, because it's casesensetive
// and hello, HELLO is not the same.

// if we don't want to filter case sensetive we need to use 'i' after last '/'
// watch 👆

// start the first video of regex after 10 minute