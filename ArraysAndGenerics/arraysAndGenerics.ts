import { type } from "os";

/* 1- Lame Solution for Mixed type
Problem in Solution-1
arr2.toLowerCase() - although all the inputs are string but as type of array passed in line 3 is of either number or string type so this above function to convert to lower case will not work. If only string were there then it would have worked.
*/
type NumberOrStringArray = (number | string)[];
function getFirstElementOfArray(arr: NumberOrStringArray): number | string {
  return arr[0];
}
console.log(getFirstElementOfArray([2, 5, 7, 1, "five"]));
const array2 = getFirstElementOfArray(["one", "two", "three", "four"]);
console.log(array2);

// 2- Better Solution (GENERICS)
type User = {
  name: string;
  age: number;
};
function getFirstElement<T>(arr: T[]): T {
  //Function take generics as Input
  return arr[0];
}
const arr1 = getFirstElement([1, 2, 3]);
// const arr1 = getFirstElement<number>([1,2,3]);
const arr2 = getFirstElement(["one", "two", "three"]);
const arr3 = getFirstElement(["one", 2, 3]);
const arr4 = getFirstElement<User>([
  { name: "Manjinder", age: 26 },
  { name: "Rishita", age: 25 },
]);
console.log(arr4);

// 3- SWAP two numbers where both the input parameters will be of same type
function swap<T>(num1: T, num2: T): [T, T] {
  return [num2, num1];
}

console.log(swap(4, 6));
console.log(swap("one", "two"));

// 4- SWAP two numbers of Mixed types (ex - number, string)
function swapMixedTypes<T, U>(num1: T, num2: U): [U, T] {
  return [num2, num1];
}
console.log(swapMixedTypes(1, true));

const swapMixedTypeUsingArrowFunction = <T,U>(num1:T, num2:U):[U,T]=>{
    return [num2,num1];
}
