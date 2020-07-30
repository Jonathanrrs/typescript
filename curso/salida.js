var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello world');
//types
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "hello";
myVar = false;
// Arrays
var stringArray = ["item1", "item1", ""];
var numberArray = [1, 2, 3, 4];
var boolArray = [true, false];
var anyArray = [1, "hello", false];
//tupls
var strNumTuple;
strNumTuple = ["Hello", 22];
/* strNumTuple = [22, "Hello"] eso da error */
/* strNumTuple = ["World", 7, [], {}] error tambien*/
// void, undefined, null
var myVoid = undefined; /* void es vacio */
var myNull = null;
var myUndefined = undefined;
/* document.write(typeof(myVoid)) */
//Functions 
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 3));
var mySum = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + " " + lastname;
}
/* document.write(getName('Jonathan', "Sandoval")) */
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
/* function showTodo(todo: {title: string; text: string;}) {
    console.log(`${todo.title} - ${todo.text}`);
} */
/* showTodo({
    title: "Programar",
    text: "React"
}) */
/* showTodo() */
var myTodo = { title: "Codear", text: "Ts" }; /* Tiene la misma interfaz que Itodo */
showTodo(myTodo);
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYear = function () {
        return this.age + " years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var Jonathan = new User("Jonathan", "jona@example.com", 20);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Ramiro = new Member(1, "Ramiro", "ramiro@example.com", 21);
Ramiro.payInvoice();
