const {fork} = require("child_process");

const computerOne = fork("./cosineComputer.js");
const computerTwo = fork("./cosineComputer.js");
const computerThree = fork("./cosineComputer.js");
const computerFour = fork("./cosineComputer.js");
const computerFive = fork("./cosineComputer.js");
const computerSix = fork("./cosineComputer.js");

computerOne.working = false;
computerTwo.working = false;
computerTwo.working = false;
computerFour.working = false;
computerFive.working = false;
computerSix.working = false;

let Start = new Date();

const computers = [computerOne,computerTwo,computerThree,computerFour,computerFive,computerSix];

let taskList = [];
let matrix = []


class Task{
	constructor(index,array) {
	  this.index = index;
	  this.array = array;
	}
}


process.on("message", m => {
	taskList = [];



	for(let i = 0; i < m.length; i++) {
		if(!matrix[i]) {
			matrix[i] = [];
		}
		taskList.push(new Task(i,m));
	}

	start = new Date();

	for(let i = 0; i < computers.length; i++) {
		if(!computers[i].working) {
			computers[i].send(taskList[i]);
			computers[i].working = true;
			taskList.splice(i,1);

			//console.log(taskList.length);
		}
	}
		
});


const doneComputers = [];



computerOne.on("message",(m) => {
	computerOne.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerOne.send(taskList[0]);
		taskList.splice(0,1)
		computerOne.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix)
				break;
			}
		}
	}
})
computerTwo.on("message",(m) => {
	computerTwo.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerTwo.send(taskList[0]);
		taskList.splice(0,1)
		computerTwo.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix);
				break;
			}
		}
	}
})
computerThree.on("message",(m) => {
	computerThree.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerThree.send(taskList[0]);
		taskList.splice(0,1)
		computerThree.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix)
				break;
			}
		}
	}
})

computerFour.on("message",(m) => {
	computerFour.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerFour.send(taskList[0]);
		taskList.splice(0,1)
		computerFour.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix)
				break
			}
		}

	}
})
computerFive.on("message",(m) => {
	computerFive.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerFive.send(taskList[0]);
		taskList.splice(0,1)
		computerFive.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix)
				break
			}
		}
	}
})
computerSix.on("message",(m) => {
	computerSix.working = false;
	matrix[m.index] = m.vectorArray;
	if(taskList.length > 0) {
		computerSix.send(taskList[0]);
		taskList.splice(0,1)
		computerSix.working = true;
	}else if(taskList.length === 0) {
		const end = new Date();
		const startMs = start.getTime();
		const endMs = end.getTime();
		console.log("finished IN MS " + (endMs - startMs))
		for(let i = 0; i < computers.length;i++) {
			if(!computers[i].working && !doneComputers.includes(computers[i])) {
				doneComputers.push(computers[i]);
			}
			if(doneComputers.length === computers.length) {
				console.log("matrix has been constructed")
				process.send(matrix)
				break;
			}
		}
	}
})
