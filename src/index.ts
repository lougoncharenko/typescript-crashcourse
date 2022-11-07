//basic types
let id: number = 5
let company: string = "Gonchar Media"
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5,6]
let arr: any[] = [1, true, 'Hello']


//tuple
let person: [number, string, boolean] = [1, 'Louisa', true]


//tuple array
let employee: [number, string][]
employee  = [
    [1, 'Brad'],
    [2, "cindy"],
    [3, "Jill"]
]

//union
let pid: string | number

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

//object
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,                                                                                                                                                                                                                                                                                                                                                                         
    name: 'John'
}

//type asertion
let cid: any = 1
let customerId = <number>cid

//functions
function addNum (x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

//interfaces
interface UserInterFace {
    id: number,
    name: string,
    age?: number // ? MAKES IT OPTIONAL
}
const user1: UserInterFace = {
    id: 1,                                                                                                                                                                                                                                                                                                                                                                         
    name: 'John'
}

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//classes 
class Person {
    protected id : number //protected class only accessible in a class or extended class
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person (1, "Brad")
const mike = new Person (2, "Mike")

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position:string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Roger", "Bus Driver")

console.log(mike.register())
console.log('ID:', id)
console.log(emp.register())

//generics
function getArray<T>(items: T []): T [] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Louisa', 'Lisa', 'Luis', 'Louise'])

// numArray.push('hello') //wont work because of generic place holder for type
strArray.push('hello') //works