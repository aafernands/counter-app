// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 37
// let humanDogRatio = 7

// myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// const increment = () => {
// alert("clicked")

// }
// increment()

// const countdown = () => {
//     console.log("My age is: 37")
// }
// countdown()
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// const countLaps = () => {
// 	console.log(lap1 + lap2 + lap3);
// };

// countLaps();
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0; //initializer

const increment = () => {
	count += 1;
	countEl.innerText = count;
};
increment();

const save = () => {
	let conutStr = count + " - ";
	saveEl.textContent += conutStr;
    countEl.textContent = 0
    count = 0
};
save();
