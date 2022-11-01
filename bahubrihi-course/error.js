// error handling

try {
	test();
} catch(error) {
	console.log(error.message);
	console.log(error.name);
} finally {
	console.log("finally running the code");
}


// for genarating our own error message we need to use 
// throw 

let a = 38;

try {
	if(a > 18) {
		throw "Elder";
	} else if (a < 18) {
		throw "Younger";
	} else {
		throw "You are 18 years old"
	}
} catch (error) {
	console.log(error);
}