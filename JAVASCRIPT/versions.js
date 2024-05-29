/*
JavaScript:1995

ECMA Script:
    ES2 :   1997
    ES3 :   1998
    ES4 :   1999
    ES5 :   2009
    ---------------------------
    ES6 :   2015
    ECMA Script 2016
    ECMA Script 2017
    ECMA Script 2018
    ECMA Script 2019
    ECMA Script 2020
    ECMA Script 2021
    ECMA Script 2022
    ECMA Script 2023
*/
/*
ES6 new Features:
    1. let
    2. const
    3. Arrow function
    4. MAP
    5. SET
    6. FOR OF
    7. classes
    8. Promises
    9. Default Parameters
    10. string.include()
    11. string.startswith()
    12. string.endswith()
    13. Destructuring
    14. rest and spread operator(...)
    15. Template Literals String
        `a = ${a}`
    16. Generators
    17. Async/await
    18. Array.from()
    19. Array.keys(),Array.values(),Array.entries()
    20. Array.find()
    21. Array.findIndex()
    22. New Math Methods
    23. Number Properties
    24. New Number Methods
    25. New Global Methods
    26. Iterables Object.entries
    27. JavaScript Modules
    28. use strict
 */

/*
    Rest Operator: allows a function to accept an indefinte
    number of arguments as an array
*/

// function test(a,b,...x){
//     console.log(`a = ${a} b = ${b} x = ${x}`)
// }
// test(10,20)
// test(10,20,30)
// test(10,20,30,40)
// test(10,20,30,40,50)
// test(10,20,30,40,50,60)
// test(10,20,30,40,50,60,70)
// test(10,20,30,40,50,60,70,80)
// test(10,20,30,40,50,60,70,80,90)
// test(10,20,30,40,50,60,70,80,90,100)


// function newTest(a, b, ...x) {
//     console.log(`a = ${a} b =s ${b} x = ${x} `)
// }

// newTest(10, 20)
// newTest(10, 20, 30)
// newTest(10, 20, 30, 40)
// newTest(10, 20, 30, 40, 50)

// function text(a, b, ...x) {
//     console.log(`a =  ${a} b =  ${b} x =  ${x}`)
// }

// text(10, 20)
// text(10, 20, 30)
// text(10, 20, 30, 40)
// text(10, 20, 30, 40, 50)
// text(10, 20, 30, 40, 50, 60)
// text(10, 20, 30, 40, 50, 60, 70)
// text(10, 20, 30, 40, 50, 60, 70, 80)
// text(10, 20, 30, 40, 50, 60, 70, 80, 90)
// text(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

// function text(a, b, ...x) {
//     console.log(`${a} + ${b} + ${x} = ${a + b + x}`)
// }

// text(10, 20)
// text(10, 20, 30)
// text(10, 20, 30, 40)
// text(10, 20, 30, 40, 50)

/*
    spread operator:Spread operator allows an iterable to expand
    in places where 0+ arguments are expected. It is mostly used
    in the variable array where there is more than 1 values are
    expected. It allows us the privilege to obtain a list of
    parameters from an array. Syntax of Spread operator is same as
    Rest parameter but it works completely opposite of it.
*/
// function test(a,b,c,d,e){
//     console.log(`a = ${a} b = ${b} c = ${c} d = ${d} and e = ${e}`)
// }
// var arr = [10,20,30,40,50]
// test(...arr)

// function text(a, b, c, d, e) {
//     console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}`)
// }

// var arr = [10, 20, 30, 40, 50]
// text(...arr)

//Shallow Copy && Deep Copy
// var emp1 = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     salary: 135000,
//     city: "Noida",
//     state: "UP"
// }
// // var emp2 = emp1 //Shallow Copy
// var emp2 = { ...emp1 } //Deep Copy

// console.log(emp1)
// console.log(emp2)

// emp2.id = 1002
// emp2.name = "Deepak Singh Gusain"

// console.log(emp1)
// console.log(emp2)

// var std1 = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     course: "MERN",
//     city: "Noida",
//     state: "UP"
// }

// var std2 = std1
// var std2 = { ...std1 }
// // console.log(std1)
// // console.log(std2)

// std2.id = 1002
// std2.name = "Shreya Verma"

// console.log(std1)
// console.log(std2)

/*
Generators :
What is a generator JavaScript?
In ECMAScript 2015, generators were introduced to the JavaScript language. A generator is a process that can be paused and resumed and can yield multiple values. A generator in JavaScript consists of a generator function, which returns an iterable Generator object
*/

// function* test(){
//     console.log("Hello World1")
//     yield 1
//     console.log("Hello World2")
//     yield 2
//     console.log("Hello World3")
//     yield 3
//     console.log("Hello World4")
//     yield 4
//     console.log("Hello World5")
//     yield 5
// }
// for(let i of test()){
//     console.log(i)
// }


// function* text() {
//     console.log("Hello Jeet")
//     yield 1
//     console.log("Hello Shreya")
//     yield 2
//     console.log("Hello Riya")
//     yield 3
//     console.log("Hello PS")
//     yield 4
//     console.log("Hello Shivani")
//     yield 5
//     console.log("Hello Manisha")
//     yield 6
// }

// for (let i of text()) {
//     console.log(i);
// }

/*
New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()


New Number Properties
ES6 added the following properties to the Number object:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER

New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()

New Global Methods
ES6 added 2 new global number methods:

isFinite()
isNaN()
 */
// console.log(Number.EPSILON)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);


/*
    ECMAScript 2016:
    JavaScript Exponentiation (**)
    JavaScript Exponentiation assignment (**=)
    JavaScript Array.prototype.includes
 */


/*
    ECMAScript 2017:
    JavaScript String padding
    JavaScript Object.entries
    JavaScript Object.values
    JavaScript Object.keys
    JavaScript async functions
    JavaScript shared memory
*/

// JavaScript String padding
// var a = "Ducat Education Noida"
// console.log(a.padStart(50,"-"))
// console.log(a.padEnd(50,"-"))

// var emp = [
//     { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 138500, city: "Faridabad", state: "Haryana" },
//     { id: 1002, name: "Deepak Singh Guain", dsg: "Trainer", salary: 138500, city: "Ghaziabad", state: "UP" },
//     { id: 1003, name: "Deepak Gupta", dsg: "Trainer", salary: 138500, city: "Noida", state: "UP" },
//     { id: 1004, name: "Mamta jain", dsg: "Trainer", salary: 138500, city: "Noida", state: "UP" },
//     { id: 1005, name: "Satyma Dixit", dsg: "Trainer", salary: 138500, city: "Noida", state: "UP" }
// ]
// console.log("Id   Name                Designation Salary    City      State")
// for (let item of emp) {
//     console.log(`${item.id.toString().padEnd(4," ")} ${item.name.padEnd(19," ")} ${item.dsg.padEnd(11," ")} ${item.salary.toString().padEnd(9," ")} ${item.city.padEnd(9," ")} ${item.state}`)
// }

// var b = "He is a good boy"
// console.log(b.padStart(30, "_"));

// var c = "He is a good girl"
// console.log(c.padStart(25, "--"));

// var std = [
//     { id: 1001, name: "Jeet Mahaur", course: "MERN", duration: "4 months", city: "Noida", state: "UP" },
//     { id: 1002, name: "Shreya Verma", course: "MERN", duration: "4 months", city: "Noida", state: "UP" },
//     { id: 1003, name: "Riya Gaur", course: "MERN", duration: "4 months", city: "Noida", state: "UP" },
//     { id: 1004, name: "Garima", course: "MERN", duration: "4 months", city: "Noida", state: "UP" }
// ]

// console.log("Id     Name          Course     Duration     City    State")

// for (let item of std) {
//     console.log(`${item.id.toString().padEnd(5, " ")} ${item.name.padEnd(10, " ")} ${item.course.padEnd(5, " ")} ${item.duration.padEnd(5, " ")} ${item.city.padEnd(5, " ")}${item.state.padEnd(5, " ")}`)
// }

// var std = [
//     { id: 1001, name: "Jeet Mahaur", course: "MERN", city: "Noida", state: "UP" },
//     { id: 1002, name: "Shreya Verma", course: "MERN", city: "Noida", state: "UP" },
// ]

// console.log("Id     Name          Course      City    State")
// for (let item of std) {
//     console.log(`${item.id.toString().padEnd(5, " ")} ${item.name.padEnd(10, " ")} ${item.course.padEnd(10, " ")} ${item.city.padEnd(5, " ")} ${item.state.padEnd(5, " ")}`)
// }

//Object keys(),values(),enteries()
// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     salary: 138500,
//     city: "Faridabad",
//     state: "Haryana"
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))

// var std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     course: "MERN",
//     duration: "4 months",
//     city: "Noida",
//     state: "UP"
// }

// console.log(Object.keys(std))
// console.log(Object.values(std))
// console.log(Object.entries(std))

// console.log(Object.keys(std))
// console.log(Object.values(std))


/*
    ECMAScript 2018
    Asynchronous Iteration
    Promise Finally
    Object Rest Properties
    New RegExp Features
*/

//Asynchronous Iterations
// async function* test(){
//     setTimeout(() => {
//         console.log("Hello World1")
//     }, 1000);
//     yield 1

//     setTimeout(() => {
//         console.log("Hello World2")
//     }, 2000);
//     yield 2

//     setTimeout(() => {
//         console.log("Hello World3")
//     }, 3000);
//     yield 3

//     setTimeout(() => {
//         console.log("Hello World4")
//     }, 4000);
//     yield 4

//     setTimeout(() => {
//         console.log("Hello World5")
//     }, 5000);
//     yield 5
// }
// async function getTest(){
//     for await(let i of test()){
//         console.log(i)
//     }
// }
// getTest()

// async function* std() {
//     setTimeout(() => {
//         console.log("Hello Jeet")
//     }, 1000);
//     yield 1

//     setTimeout(() => {
//         console.log("Hello Shreya")
//     }, 2000);
//     yield 2

//     setTimeout(() => {
//         console.log("Hello Riya")
//     }, 3000);
//     yield 3
// }

// async function getStd() {
//     for await (let i of std()) {
//         console.log(i);
//     }
// }

// getStd();

// async function* std() {
//     setTimeout(() => {
//         console.log("Jeet is a good boy")
//     }, 1000);
//     yield 1

//     setTimeout(() => {
//         console.log("Shreya is a good girl")
//     }, 2000);
//     yield 2

//     setTimeout(() => {
//         console.log("Riya is a good girl")
//     }, 3000);
//     yield 3
// }

// async function getStd() {
//     for await (let i of std()) {
//         console.log(i);
//     }
// }

// getStd();


//Promise finally
// var p = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Promise is Resolved")
//         rej("Promise is Rejected")
//     }, 2000)
// })

// p
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     }).finally(() => {
//         console.log("Finally Called")
//     })


// var p = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 2000)
// })

// p
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finally Called")
//     })

// var s = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 2000)
// })

// s
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Finally called")
//     })

// var n = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("promise is rejected")
//     }, 2000)
// })

// n
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finally called")
//     })

// //Object Rest Properties
// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     salary: 138500,
//     city: "Faridabad",
//     state: "Haryana"
// }
// var {id,name,...x} = emp
// console.log(id,name)
// console.log(x)

// var std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     course: "MERN",
//     duration: "3 months",
// }

// var { id, name, ...y } = std
// console.log(id,name)
// console.log(y);

// var std = {
//     id: 1002,
//     name: "Shreya Verma",
//     course: "MERN",
//     duration: "3 months",
// }
// var { id, name, ...z } = std
// console.log(id, name)
// console.log(z);

/*
    ECMAScript 2019
    Array.prototype.{flat,flatMap}
    Object.fromEntries
    String.prototype.{trimStart, trimEnd}
    Well-formed JSON.stringify
    Function.prototype.toString
    Symbol.prototype.description
*/
//Array Flat
// var a = [[10,20,30],[40,50,60],70,[80,90,100]]
// console.log(a)
// console.log(a.flat(1))
// console.log(a.map((x)=>x*5))
// console.log(a.flat(1).map((x)=>x*5))

// var b = [[10, 20, 30,], 50, 60, 70, [80, 90, 100]]
// console.log(b);
// console.log(b.flat(1));
// console.log(b.map((x) => x * 5))
// console.log(b.flat(1).map((x) => x * 5));

// var a = [[[10,20,30],[40,50,60],70],[[80,90,100]]]
// console.log(a)
// console.log(a.flat(2))
// console.log(a.map((x)=>x*5))
// console.log(a.flat(2).map((x)=>x*5))

// var b = [[[[10, 20, 30,]]], [50, 60, 70], [[[80, 90], 100]]]
// console.log(b);
// console.log(b.flat(2));
// console.log(b.map((x) => x * 5));
// console.log(b.flat(3).map((x) => x * 5));

// var a = [[[[10, 20, 30], [40, 50, 60], 70], [[80, 90, 100]]]]
// console.log(a)
// console.log(a.flat(3))
// console.log(a.map((x) => x * 5))
// console.log(a.flat(3).map((x) => x * 5))

// var a = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[10,20,30],[40,50,60],70],[[80,90,100]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// while(true){
//     var flag = false
//     a = a.flat(1)
//     for(let item of a){
//         if(isNaN(item*5)){
//             flag = true
//             break
//         }
//     }
//     if(flag == false)
//         break
// }
// console.log(a)

// var b = [[[[[[[10, 20, 30, [40, 50, 60], 70, 80, [[[90, 100]]]]]]]]]]

// while (true) {
//     var flag = false
//     b = b.flat(1)
//     for (let item of b) {
//         if (isNaN(item * 5)) {
//             flag = true
//             break
//         }
//     }
//     if (flag == false)
//         break
// }

// console.log(b);

//flatMap()
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a.map(x=>[x*5]))
// console.log(a.flatMap(x=>[x*5]))
// console.log(a.map(x=>[[x*5]]))
// console.log(a.flatMap(x=>[[x*5]]))

//Object.fromEnteries()
// var emp = new Map([
//     ["id",1001],
//     ["name","Nitin Chauhan"],
//     ["dsg","Trainer"],
//     ["salary",135800],
//     ["city","Faridabad"],
//     ["state","Haryana"]
// ])
// var obj = Object.fromEntries(emp)
// console.log(obj)

// var std = new Map([
//     ["id", 1001],
//     ["name", "Jeet Mahaur"],
//     ["course", "MERN"],
//     ["duration", "3 months"]
// ])

// var obj = Object.fromEntries(std)
// console.log(obj);

// var std = new Map([
//     ["id", 1001],
//     ["name", "Shreya Verma"],
//     ["course", "MERN"],
//     ["duration", "3 Months"]
// ])

// var obj = Object.fromEntries(std);
// console.log(obj);

/*

 ECMAScript 2020
 BigInt
 Nullish Coalescing
 Optional Chaining
 Promise.allSettled

 global This
 String#matchAll        //regex
 Module Namespace Exports
 import.meta
 Dynamic import

 Well defined for-in order
 */

//BigInt
// console.log(Number.MAX_SAFE_INTEGER)
// var a = 100000000000000000000000000111123n
// console.log(a)

// var num = 50000n
// var f = 1n
// for(let i=num;i>=1;i--){
//     f=f*i
// }
// console.log(f)

// console.log(Number.MAX_SAFE_INTEGER)

// var b = 1000000000000000000000000000n
// console.log(b);

// var num = 50000n
// var f = 1n
// for (let i = num; i >= 1; i--) {
//     f = f * i
// }

// console.log(f);

/*
 Nullish Coalescing(??)
    syntax:
        statement1??statemnet2

    this operator execute second statement only if first statement result is undefined or null else only first statement will execute
*/
// false||console.log("Hello World1")
// 0||console.log("Hello World2")
// ""||console.log("Hello World3")
// undefined||console.log("Hello World4")
// null||console.log("Hello World5")
// true||console.log("Hello World6")

// false || console.log("Hello Jeet");
// 0 || console.log("Hello Shreya");
// " " || console.log("Hello World");
// undefined || console.log("Hello again jeet");

// false??console.log("Hello World1")
// 0??console.log("Hello World2")
// ""??console.log("Hello World3")
// undefined??console.log("Hello World4")
// null??console.log("Hello World5")
// true??console.log("Hello World6")

// false ?? console.log("hello Jeet")
// 0 ?? console.log("Hello Shreya")
// "" ?? console.log("Hello World");

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     active:false
// }
// console.log(emp.id??"N/A")
// console.log(emp.name??"N/A")
// console.log(emp.dsg??"N/A")
// console.log(emp.salary??"N/A")
// console.log(emp.active??"N/A")

// var std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     course: "MERN",
//     duration: "3 Months",
//     active: false
// }
// console.log(std.id ?? N / A)
// console.log(std.name ?? N / A)
// console.log(std.course ?? N / A)
// console.log(std.duration ?? N / A)
// console.log(std.active ?? N / A)

//Optional Chaining
// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     active: false,
//     address: {
//         house: "1C",
//         street: "16A",
//         locality: "XYZ Complex, ABC Nagar",
//         city: {
//             name: "Noida",
//             pin: 201301
//         }
//     }
// }
// console.log(emp.name??"N/A")
// console.log(emp.address?.city?.name??"N/A")
// console.log(emp.address?.state?.name??"N/A")
// console.log(emp.city?.name??"N/A")


// var std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     course: "MERN",
//     duration: "3 Months",
//     active: false,
//     address: {
//         house: "1U",
//         street: "16A",
//         locality: "XYZ complex, ABC Nagar",
//         city: {
//             name: "Noida",
//             pin: 202021
//         }

//     }
// }

// console.log(std.name ?? "N/A")
// console.log(std.address?.city?.name ?? "N/A")
// console.log(std.address?.state?.name ?? "N/A")

// Promise.allSettled
// var p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     }, 2000)
// })
// var p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     }, 5000)
// })
// var p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     }, 1000)
// })
// Promise.allSettled([p1, p2, p3])
//     .then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })

// var a = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 2000)
// })

// var b = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 5000)
// })

// Promise.allSettled([a, b])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// var c = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promised is rejected")
//     }, 2000)
// })

// var d = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promised is resolved")
//         rej("Promised is rejected")
//     }, 4000)
// })

// var e = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promised is resolved")
//         rej("Promised is rejected")
//     }, 6000)
// })

// Promise.allSettled([c, d, e])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// async function getPromise(){
//     try {
//         console.log(await Promise.allSettled([p1,p2,p3]))
//     } catch (error) {
//         console.log(error)
//     }
// }
// getPromise()

// var a = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 1000)
// })

// var b = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promise is rejected")
//     }, 2000)
// })

// var c = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise is resolved")
//         rej("Promised is rejected")
//     }, 3000)
// })

// var d = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promised is resolved")
//         rej("Promised is rejected")
//     }, 4000)
// })

// var e = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promised is resolved")
//         rej("Promised is rejected")
//     }, 5000)
// })

// async function getPromise() {
//     try {
//         console.log(await Promise.allSettled([a, b, c, d, e]))
//     }

//     catch (error) {
//         console.log(error)
//     }
// }

// getPromise();

//ECMA 2021
// String replaceAll()

//logical short Hand Operator i.e a=a&&b i.e a&&=b

//numeric separation    i. 1_000_000
// console.log(1_000_000)

//Private class methods
// class Test{
//     #show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         this.#show()
//         console.log("In display() of Test Class")
//     }
// }
// var obj = new Test()
// obj.display()

// class Test {
//     #show() {
//         console.log("In show() of test class")
//     }

//     display() {
//         this.#show()
//         console.log("In display() of test class")
//     }
// }

// var obj = new Test()
// obj.display()

// class Text {
//     #show() {
//         console.log("Hello Jeet")
//     }

//     display() {
//         this.#show()
//         console.log("Hello Shreya")
//     }
// }

// var obj = new Text()
// obj.display()


//Private Getters and Setters
// class Employee{
//     setData(id,name,dsg){
//         this.id = id
//         this.name = name
//         this.dsg = dsg
//     }
//     set #setSalary(num){
//         this.salary = num
//     }
//     get #display(){
//         console.log(`
//             Id          :   ${this.id}
//             Name        :   ${this.name}
//             Designation :   ${this.dsg}
//             Salary      :   ${this.salary}
//         `)
//     }
//     show(num){
//         this.#setSalary = num
//         this.#display
//     }
// }
// var obj = new Employee()
// obj.setData(1001,"Nitin Chauhan","Trainer")
// obj.show(135000)



// promise any
// var p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     }, 2000)
// })
// var p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     }, 5000)
// })
// var p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     }, 1000)
// })
// Promise.any([p1, p2, p3])
//     .then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })

//ECMA 2022
/*
Array at()
String at()
RegExp /d
Object.hasOwn()
error.cause

await import
Class field declarations
Private methods and fields
*/
//Array at()
//String at()
// var a = [10,20,30,40,50]
// console.log(a[0])
// console.log(a.at(0))
// console.log(a[1])
// console.log(a.at(1))

// var a = "Ducat"
// console.log(a[0])
// console.log(a.at(0))
// console.log(a[1])
// console.log(a.at(1))

//Object.hasOwn()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000
// }
// console.log(Object.hasOwn(emp,"id"))
// console.log(Object.hasOwn(emp,"name"))
// console.log(Object.hasOwn(emp,"dsg"))
// console.log(Object.hasOwn(emp,"salary"))
// console.log(Object.hasOwn(emp,"city"))

// //Error cause
// var a = 15
// var b = 0
// try {
//     if (b === 0)
//         throw new Error("Can't Divide By Zero Exception", {
//             cause: { result: "Fail", resone: "Can't Divide By Zero Exception" },
//         });
// } catch (error) {
//     console.log(error.cause)
// }


// Class field declarations
// class Test {
//     a = 0
//     b = 0
//     sum = 0
//     setData(a, b) {
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b
//     }
//     display() {
//         console.log(`${this.a}  + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Test()
// var y = new Test()
// x.setData(10,20)

// x.display()
// y.display()


//ECMA 2023
/*
//ECMA 2023
/*
Array findLast()
Array findLastIndex()
Array toReversed() : return an reversed array, and doesn't change the Original Array
Array toSorted()   : return a sorted array, and doesn't change the Original Array
Array toSpliced()  : return an updated array after deletion or insertion, and doesn't change the Original Array
Array with()       : update indexed value with a value and return undated array, and doesn't change the Original Array
#! (Shebang)
 */

// var a = [12,13,14,15,21,32,62,454,65,15,45,15,2,3,5,4,65,5,4,6,2,1,2]
// function check(item){
//     return item%5==0
// }
// console.log(a.findLast(check))
// console.log(a.findLastIndex(check))


// var b = a.toReversed()
// console.log(a)
// console.log(b)

// var b = a.toSorted((x,y)=>x-y)
// console.log(a)
// console.log(b)

// var b = a.toSpliced(5,7)
// console.log(a)
// console.log(b)

// Array with()
// var a = [10,20,30,40,50,60]
// console.log(a.with(2,300))
// console.log(a)