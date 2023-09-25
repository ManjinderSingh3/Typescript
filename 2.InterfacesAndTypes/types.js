/* NOTES :
- Types are very much similar to Interface. There is a syntax difference how they are defined and a type cannot be implemented by another type like we can implement Interface.
- Interfaces can have methods, whereas Types don't have.
- Types let us do ORs ( | ) and ANDs (&), whereas, interfaces don't
*/
function welcome(person) {
    return ("Hello Mr. " +
        person.name +
        ". You have turned " +
        person.age +
        " old. Its time to do something BIG now !!");
}
console.log(welcome({ name: "Manjinder", age: 26 }));
function calculateArea(shape) {
    return shape.length * shape.breadth;
}
console.log("Area of the shape is :" +
    calculateArea({
        radius: 2,
        length: 5,
        breadth: 10
    }));
