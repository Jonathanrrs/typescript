console.log('Hello world');

//types

var myString: string = "Hello world";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = false;

var myVar: any = "hello";
myVar = false;

// Arrays
var stringArray: string[] = ["item1", "item1", ""];
var numberArray: number[] = [1,2,3,4];
var boolArray: boolean[] = [true,false];
var anyArray: any[] = [1, "hello",false];

//tupls
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22]
/* strNumTuple = [22, "Hello"] eso da error */ 
/* strNumTuple = ["World", 7, [], {}] error tambien*/

// void, undefined, null
let myVoid: void = undefined; /* void es vacio */
let myNull: null = null;
let myUndefined: undefined = undefined;
/* document.write(typeof(myVoid)) */

//Functions 
function getSum(num1: number, num2: number): number { /* lo que va a retornar */
    return num1+num2;
}
console.log(getSum(5,3));
let mySum = function(num1: number | string, num2: number | string):number {
    if(typeof(num1) === "string") {
        num1 = parseInt(num1);
    }
    if(typeof(num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1+num2;
}

function getName(firstname:string, lastname?: string):string { /* ? para hacerlo opcional */
    if(lastname == undefined) {
        return firstname;
    }
    return `${firstname} ${lastname}`;
}

/* document.write(getName('Jonathan', "Sandoval")) */

function myVoidFunction():void {
    return;
}

//Interfaces
interface ITodo {
    title: string;
    text: string;
}
function showTodo(todo: ITodo) {
    console.log(`${todo.title} - ${todo.text}`);
}
/* function showTodo(todo: {title: string; text: string;}) {
    console.log(`${todo.title} - ${todo.text}`);
} */
/* showTodo({
    title: "Programar",
    text: "React"
}) */
/* showTodo() */
let myTodo: ITodo = {title: "Codear", text: "Ts"}; /* Tiene la misma interfaz que Itodo */
showTodo(myTodo);

//Clases
class User {
    private name: string; /* Accesible solo en la clase */
    public email: string;
    protected age: number; /* accesible que hereden de esta clase */
    constructor(name: string, email: string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    register() {
        console.log(`${this.name} is registered`);
    }
    showMeAge() {
        return this.age;
    }

    private ageInYear() { /* No se accede desde fuera */
        return `${this.age} years`
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`);
        
    }
}

let Jonathan = new User("Jonathan", "jona@example.com", 20);

class Member extends User {
    id: number;
    constructor(id, name, email, age) {
        super(name, email, age) 
        this.id = id;
        
    }

    payInvoice() {
        super.payInvoice();
    }
}

var Ramiro = new Member(1, "Ramiro", "ramiro@example.com", 21);
Ramiro.payInvoice();