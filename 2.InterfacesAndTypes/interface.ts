/*
1- Ordinary way to define complex/mixed type of data

export function greet(person: { name: string; age: number }): string {
  return "Hello Mr. " + person.name + "your age is " + person.age;
}
console.log(
  greet({
    name: "Manjinder",
    age: 26,
  })
);
*/

/*
// 2 -  Interfaces are used when we have complexed/mixed objects
interface Person {
  name: string;
  age: number;
  address: string;
}

export function greet(person: Person): string {
  return "Hello Mr. " + person.name + "your age is " + person.age;;
}
*/

// 3- Implementing Interface in a class
interface PersonInterface {
  name: string;
  age: number;
  greet(): string; // Interfaces can have methods, whereas Types don't have.
}
class Person implements PersonInterface {
  name: string; // Properties defined in Interface are described in Class
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return (
      "Hi Mr. " + this.name + ", welcome to " + this.age + " years club !!"
    );
  }
}
const obj = new Person("Manjinder", 26);
console.log(obj.greet());

// 4- One interface can use another interface
interface GenderProperties {
  gender: string;
  pronounce: string;
}
interface Human {
  name: string;
  age: number;
  genderProperties: GenderProperties; // Using one interface inside another
}
function greetings(person: Human): string {
  return "Hey love " + person.name;
}
console.log(
  greetings({
    name: "Rishita",
    age: 25,
    genderProperties: {
      gender: "female",
      pronounce: "she/her",
    },
  })
);

// 5- One Interface can extend another Interface
interface Shape {
  name: string;
  area: number;
}
interface Rectangle extends Shape {
  perimeter: number;
}
interface Triangle extends Shape {
  base: number;
  height: number;
}
