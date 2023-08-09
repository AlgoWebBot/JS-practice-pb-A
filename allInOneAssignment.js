function cubeNumber(number) {
let sum = 1;
if (typeof number !== 'number') {
let message = 'Please enter a number.';
return message;
} else {
for (var i = 0; i < 3; i++){
sum *= number;
}
}
return sum;
}
function matchFinder(string1, string2) {
if (typeof string1 !== 'string' || typeof string2 !== 'string') {
let message = 'Please enter a string and its two parameter must be string';
return message;
} else if (string1.includes(string2)) {
return true;
} else {
return false;
}
}
function sortMaker(arr) {
let array = [];
let temp = arr[0];
let message;
if (arr[0] < 0 || arr[1] < 0) {
message = "Invalid Input";
return message;
} else if (arr[0] === arr[1]) {
message = "equal";
return message;
}
else if (arr[0] < arr[1]) {
arr[0] = arr[1];
arr[1] = temp;
array.push(arr[0], arr[1]);
return array;
}
else {
return arr;
}
}
function findAddress(obj) {
let street = obj.street || '__';
let house = obj.house || "__";
let society = obj.society || "__";
let valid = street + "," + house + "," + society;
return valid;
}
function canPay(changeArray, totalDue) {
let sum = 0;
if (changeArray.length === 0) {
let message = "Please provide a array with some element !."
return message;
}
for (var i = 0; i < changeArray.length; i++){
sum += changeArray[i];
}
if (sum >= totalDue) {
return true;
} else {
return false;
}
}

console.log(cubeNumber("x"));
console.log(matchFinder("Peter", 1));
console.log(sortMaker([10, -20]));
console.log(findAddress({street:10}))
console.log(canPay([], 10));