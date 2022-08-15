
const array1 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [false, -2, -1, 0, 1, 2, 3, 4, 5, 6];

if(array1[0] === true) {
    array1.shift();
    array1.reverse();
}else {
    array1.shift();
}
if(array2[0] === true) {
    array2.shift();
    array2.reverse();
}else {
    array2.shift();
}

console.log(array1); // [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2); // [false, -2, -1, 0, 1, 2, 3, 4, 5, 6]

console.log(finalArray1); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(finalArray2); // [-2, -1, 0, 1, 2, 3, 4, 5, 6]