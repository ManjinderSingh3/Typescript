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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return ("Hi Mr. " + this.name + ", welcome to " + this.age + " years club !!");
    };
    return Person;
}());
var obj = new Person("Manjinder", 26);
console.log(obj.greet());
function greetings(person) {
    return "Hey love " + person.name;
}
console.log(greetings({
    name: "Rishita",
    age: 25,
    genderProperties: {
        gender: "female",
        pronounce: "she/her"
    }
}));
