"use strict";
exports.__esModule = true;
function getFirstElementOfArray(arr) {
    return arr[0];
}
console.log(getFirstElementOfArray([2, 5, 7, 1, "five"]));
var array2 = getFirstElementOfArray(["one", "two", "three", "four"]);
console.log(array2);
function getFirstElement(arr) {
    //Function take generics as Input
    return arr[0];
}
var arr1 = getFirstElement([1, 2, 3]);
// const arr1 = getFirstElement<number>([1,2,3]);
var arr2 = getFirstElement(["one", "two", "three"]);
var arr3 = getFirstElement(["one", 2, 3]);
var arr4 = getFirstElement([
    { name: "Manjinder", age: 26 },
    { name: "Rishita", age: 25 },
]);
console.log(arr4);
// 3- SWAP two numbers where both the input parameters will be of same type
function swap(num1, num2) {
    return [num2, num1];
}
console.log(swap(4, 6));
console.log(swap("one", "two"));
// 4- SWAP two numbers of Mixed types (ex - number, string)
function swapMixedTypes(num1, num2) {
    return [num2, num1];
}
console.log(swapMixedTypes(1, true));
var swapMixedTypeUsingArrowFunction = function (num1, num2) {
    return [num2, num1];
};
