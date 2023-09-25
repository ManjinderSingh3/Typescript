/* NOTES :
- Types are very much similar to Interface. There is a syntax difference how they are defined and a type cannot be implemented by another type like we can implement Interface.
- Interfaces can have methods, whereas Types don't have.
- Types let us do ORs ( | ) and ANDs (&), whereas, interfaces don't 
*/

// 1
type TypeExample = {
  name: string;
  age: number;
};
function welcome(person: TypeExample): string {
  return (
    "Hello Mr. " +
    person.name +
    ". You have turned " +
    person.age +
    " old. Its time to do something BIG now !!"
  );
}
console.log(welcome({ name: "Manjinder", age: 26 }));

// 2- TYPES can be used in another TYPE or even one interface can be , but, we cannot implement one TYPE in another TYPE
interface Interface1 {
  name: string;
}
type Type1 = {
  gender: string;
  pronounce: string;
};
type Type2 = {
  name: string;
  age: number;
  type1: Type1; // this is allowed
  interface1: Interface1; // this is also allowed
};

// 3- TYPES let us do UNION (ORs) and INTERSECTION (ANDs)
interface Circle1 {
  radius: number;
  borderRadius?: number;
}
interface Square1 {
  length: number;
}
interface Rectangle1 {
  length: number;
  breadth: number;
}
type Shape1 = Circle1 | Square1 | Rectangle1; // OR. Benefit of using type is that in future if more shapes add then we will only have to add here. Instead of doing in each methods parameter (like line #53)
type Shape2 = Circle1 & Square1 & Rectangle1; // AND
type Shape3 = Rectangle1;

function calculateArea(shape: Shape2): number {
  return shape.length * shape.breadth;
}

console.log(
  "Area of the shape is :" +
    calculateArea({
      radius: 2,
      length: 5,
      breadth: 10,
    })
);
