"use strict";
//basic types
let id = 5;
let company = "Gonchar Media";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'Louisa', true];
//tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, "cindy"],
    [3, "Jill"]
];
//union
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
//type asertion
let cid = 1;
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Roger", "Bus Driver");
console.log(mike.register());
console.log('ID:', id);
console.log(emp.register());
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Louisa', 'Lisa', 'Luis', 'Louise']);
// numArray.push('hello') //wont work because of generic place holder for type
strArray.push('hello'); //works
