/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 *
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability

Note1: a function can't access variables defined in other function directly to do so we have to use concept of arguments and return value
Note2: a function can access variables defines in global scope and vice versa not true

 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter


syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
    }
    functionName(arguments)
 */
//sample function
// function test(){
//     console.log("In test()")
// }
// console.log("In Global Main Scope")
// test()
// test()
// test()
// test()
// test()
// console.log("Back to Global Main Scope")

// function sub() {
//     var a = 10;
//     var b = 5;
//     var c = a - b;
//     console.log(`sub=${c}`)
// }

// function test() {
//     sub()
// }

// test()

// function sam() {
//     console.log(`This is hello World!`)
// }
// sam()

// function sum() {
//     console.log(`Hello World !`)
// }
// sum()
// console.log(`Hello New World`)

// function sum() {
//     console.log(`Hello World 1`)
//     console.log(`Hello World 2`)
//     console.log(`Hello World 3`)
//     console.log(`Hello World 4`)
//     console.log(`Hello World 5`)
// }
// sum()
// console.log(`Hello World 6`)
// console.log(`Hello World 7`)
// console.log(`Hello World 8`)
// console.log(`Hello World 9`)
// console.log(`Hello World 10`)



//Global Execution Context :  Program Area outside any function

//function call within function
// function fun1(){
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2(){
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// console.log("In Main Global Scope")
// fun1()
// console.log("Back to Main Global Scope")


// function fun1() {
//     console.log(`Hello world 1`);
//     fun2()
//     console.log(`Hello world 2`)
// }

// function fun2() {
//     console.log(`Hello world 3`)
//     fun3()
//     console.log(`Hello world 4`)
// }

// function fun3() {
//     console.log(`Hello world 5`)
// }

// console.log(`In main global scope`)
// fun1()
// console.log(`Back to main global scope`)



// 1. function without return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     add()
// }
// test()


// function sum() {
//     let a = 20
//     let b = 30
//     let sum = a + b
//     console.log(`sum=${sum}`)
// }

// function test() {
//     sum()
// }

// test()


// function sub() {
//     let a = 10
//     let b = 20
//     let sub = a - b
//     console.log(`${a} - ${b}= ${sub}`)
// }

// sub();

// function sub() {
//     let a = 10
//     let b = 20
//     let sub = a - b
//     console.log(`${a} - ${b}= ${sub}`)
// }

// function sub1() {
//     sub();
// }

// sub1()

// function multi() {
//     var a = 10;
//     var b = 3;
//     var c = a * b;
//     console.log(`Multi : ${c}`)
// }

// function test() {
//     multi()
// }

// test()

// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function test(){
//     var s = add()
//     console.log(`sum = ${s}`)
// }
// test()

// function add() {
//     let a = 10
//     let b = 20
//     let sum = a + b;
//     return sum
// }

// function test() {
//     let s = add()
//     console.log(`sum=${s}`)
// }

// test()

// function sub() {
//     let a = 100
//     let b = 50
//     let subs = a + b;
//     return subs
// }

// function text() {
//     let c = sub()
//     console.log(`sub= ${c}`);
// }

// text()


// function sub() {
//     var a = 10;
//     var b = 5;
//     var c = a - b;

//     return c
// }

// function test() {
//     let d = sub()
//     console.log(`Sub= ${d}`)
// }

// test()


// function multi() {
//     var a = 10;
//     var b = 5;
//     var c = a * b;

//     return c
// }

// function test() {
//     let d = multi()
//     console.log(`Sub= ${d}`)
// }

// test()

// function div() {
//     var a = 10;
//     var b = 5
//     var c = a / b;

//     return c
// }

// function test() {
//     var d = div()
//     console.log(`Div: ${d}`)
// }

// test();

// 3. function without return value with parameter
// function add(x,y){  //parameters or formal parameter
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     var a = 10
//     var b = 20
//     add(a,b)        //arguments or actual parameter
// }
// test()

// function sub(x, y) {
//     var subs = x - y;
//     console.log(`Subs=${subs}`)
// }

// sub(10, 8)

// function multi(x, y) {
//     var multis = x * y;
//     console.log(`Multi: ${multis}`)
// }

// function test() {
//     var a = 10;
//     var b = 5;
//     multi(a, b)
// }

// test()


// function div(x, y) {
//     var divs = x / y;
//     console.log(`Div: ${divs}`)
// }

// function test() {
//     var a = 10;
//     var b = 5;
//     div(a, b)
// }

// test()


// function pow(a, b) {
//     var pows = a ** b
//     console.log(`Pows :${pows}`)
// }

// pow(10, 2)

// function pow(a, b) {
//     var pows = a ** b
//     console.log(`Pows :${pows}`)
// }

// function test() {
//     var x = 10;
//     var y = 10;
//     pow(x, y)
// }

// test();

// 4. function with return value with parameter
// function add(x,y){
//     var sum = x+y
//     return sum
// }
// function test(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)
//     console.log(`sum = ${s}`)
// }
// test()

// function sub(x, y) {
//     var subs = x - y
//     return subs
// }

// function test() {
//     var a = 9;
//     var b = 5;
//     var c = sub(a, b)
//     console.log(`Sub: ${c}`)
// }
// test()

// function div(x, y) {
//     var divs = x / y;
//     return divs
// }

// function test() {
//     var a = 10;
//     var b = 5;
//     var c = div(a, b)
//     console.log(`Div :${c}`)
// }

// test();

// function sumDigit(num){
//     var sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum+r
//         num = parseInt(num/10)
//     }
//     return sum
// }

// console.log(sumDigit(12345))
// console.log(sumDigit(14785))
// console.log(sumDigit(85241))
// console.log(sumDigit(65892))
// console.log(sumDigit(985))
// console.log(sumDigit(99999))
// console.log(sumDigit(78595))

//default parameters or optional parameter
// function test(a=0,b=0,c=0){
//     console.log(`a = ${a} b = ${b} and c = ${c}`)
// }
// test(10,20,30)
// test(10,20)
// test(10)
// test()

// function text(a = 0, b = 0, c = 0) {
//     console.log(`a=${a} b=${b} c=${c}`)
// }

// text(10, 11, 20)
// text(10, 11)
// text(10)
// text()


// function text(a = 0, b = 0, c = 0) {
//     console.log(`a=${a} b=${b} c=${c}`)
// }
// text(20, 30, 50)
// text(20, 30)
// text(20)
// text()

//function returing an Array
// function test(){
//     return [10,20,30,40,50]
// }
// console.log(test())

// function text() {
//     return [20, 60, 80, 100]
// }
// console.log(text());

// function text() {
//     return [50, 60, 140, 190];
// }
// console.log(text());

//Regular function
// function test(){
//     console.log("In regular test()")
// }
// test()

// function text() {
//     console.log("In text tex()")
// }
// text();

// function add(x,y){
//     return x+y
// }
// console.log(add(12,13))

// function sub(x, y) {
//     return x - y
// }
// console.log(sub(10, 3));

//anonymous function
// var test = function(){
//     console.log("In anonymous function")
// }
// test()

// var text = function () {
//     console.log("In anonymous function")
// }
// text()

// var add  = function(x,y){
//     return x+y
// }
// console.log(add(12,13))

// var add = function (x, y) {
//     return x + y
// }
// console.log(add(10, 3))

// var sub = function (x, y) {
//     return x - y;
// }
// console.log(sub(5, 2));

//arrow function or fat arrow function
// var test = ()=>console.log("In fat arrow function")
// test()

// var text = () => console.log("Hello World")
// text();

// var add  = (x,y)=>x+y
// console.log(add(12,13))

// var sub = (x, y) => x - y
// console.log(sub(10, 4))

// var multi = (a, b) => a * b
// console.log(multi(10, 2));

//self invoked functions
// self invoked regular functions

// (function test(){
//     console.log("In test regular function")
// })()

// (function text() {
//     console.log("Hello World")
// })()

// (function add(x,y){
//     console.log(x+y)
// })(10,20)

// (function sub(x, y) {
//     console.log(x - y);
// })(20, 10)

// (function multi(x, y) {
//     console.log(x * y)
// })(10, 10)

// self invoked anonymous functions

// (function(){
//     console.log("In test regular function")
// })()

// (function(x,y){
//     console.log(x+y)
// })(10,20)

//self invoked fat arrow functions

// (()=>console.log("In test regular function"))()

// ((x,y)=>console.log(x+y))(10,20)


//storage class
/**
var             function level
let             block level
const           block level
no keyword      global
 */

// function test(){
//     if(true){
//         a = 10          //global level variable
//         var b = 20      //function level variable
//         let c = 30      //block level variable
//         const d = 10    //block level variable
//         console.log(`Inside if block of test a = ${a} b = ${b} c = ${c} and d = ${d}`)
//     }
//     console.log(`Outside if block of test a = ${a} b = ${b}`)
// }
// test()
// console.log(`Outside test a = ${a}`)

// function example(){
//     console.log(`In example() a = ${a}`)
// }
// example()


//Recursion: when function call itself
// function test(){
//     console.log("In test function")
//     test()
//     console.log("Back to test function")
// }
// console.log("In main global scope")
// test()
// console.log("Back to main global scope")


// var a = 0
// function test(){
//     a++
//     console.log("In test function")
//     if(a<5)
//     test()
//     console.log("Back to test function")
// }
// console.log("In main global scope")
// test()
// console.log("Back to main global scope")

// function test(a){
//     a++
//     console.log("In test function")
//     if(a<5)
//     test(a)
//     console.log("Back to test function")
// }
// console.log("In main global scope")
// test(0)
// console.log("Back to main global scope")


// function fact(num){
//     if(num<=1)
//     return 1
//     else
//     return num*fact(num-1)
// }
// console.log(fact(5))