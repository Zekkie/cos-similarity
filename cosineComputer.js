console.log("COMPUTER RUNNING WITH PID: " + process.pid);


const calculate = require("calculate-cosine-similarity");

const tokenize = (input) => {
	return input.toLowerCase().split(" ");
}

process.on("message", m => {
	const cosineVectorArray = [];
		const first = tokenize(m.array[m.index].content);
		for(let j = 0; j < m.array.length; j++) {
			const second = tokenize(m.array[j].content);
			cosineVectorArray.push(calculate(first,second));

		}

	process.send({vectorArray: cosineVectorArray,index:m.index});
});