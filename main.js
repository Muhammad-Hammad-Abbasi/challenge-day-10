// Question 19: Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
// Example Usage:
// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Output: 2
// counter.decrement();
// console.log(counter.getValue()); // Output: 1
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
    }
    Counter.prototype.increment = function () {
        this.value += 1;
    };
    Counter.prototype.decrement = function () {
        this.value -= 1;
    };
    Counter.prototype.getValue = function () {
        return this.value;
    };
    return Counter;
}());
;
var counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
// Question 20: Implement a Simple Student Record
// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:
// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
// Example Usage:
// const student = new Student();
// student.setName("Alice");
// student.setGrade(90);
// console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
var Student = /** @class */ (function () {
    function Student() {
        this.name = "Adam";
        this.grate = 0;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grate = grade;
    };
    Student.prototype.getRecord = function () {
        return { name: this.name, grade: this.grate };
    };
    return Student;
}());
;
var student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
