/*
objects store information in pair of keys and values
keys must be unique
values may be duplicate
mutable data type

*/
//object literal 
// let emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000,
//     city:"Faridabad",
//     state:"Haryana"
// }
// console.log(emp)

// let student = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     course: "Mern",
//     city: "Noida"
// }

// console.log(student);


//Empty object literal
// var emp = {}
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 135000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)

// var student = {}
// student.id = 1001,
//     student["name"] = "Jeet Mahaur",
//     student['branch'] = "CSE",
//     student[`course`] = "Mern",
//     student.city = "Noida"

// console.log(student);

// var student = {}
// student.id = 1002
// student["name"] = "Shreya"
// student['branch'] = "Automobile"
// student[`year`] = "Final Year"
// student.city = "Noida"

// console.log(student);

//new Object()
// var emp = Object()
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 135000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)

// var std = new Object()
// std.id = 1001
// std["name"] = "Jeet Mahaur"
// std['branch'] = "CSE"
// std[`year`] = "Final Year"
// std.city = "Noida"

// console.log(std);

// var std = new Object()
// std.id = 1002
// std["name"] = "Shreya Verma"
// std['branch'] = "Automobile"
// std[`year`] = "Final Year"
// std.city = "Noida"

// console.log(std);

//Accessing Object Values with help of keys
// console.log(emp)
// console.log(emp.id)
// console.log(emp['name'])
// console.log(emp["dsg"])
// console.log(emp[`salary`])

// var std = new Object()
// std.id = 1001
// std["name"] = "Jeet Mahaur"
// std['branch'] = "CSE"
// std[`year`] = "Final Year"
// std.city = "Noida"

// console.log(std);
// console.log(std.id);
// console.log(std["name"])
// console.log(std['branch'])
// console.log(std[`year`])

//Accessing Object values through Loop
// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`)
// }

// var std = new Object()
// std.id = 1001
// std["name"] = "Jeet Mahaur"
// std['branch'] = "CSE"
// std[`year`] = "Final Year"
// std.city = "Noida"

// for (let key in std) {
//     console.log(`${key}=${std[key]}`)
// }


// let std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     city: "Noida"
// }

// for (let key in std) {
//     console.log(`${key}=${std[key]}`);
// }

//adding an item to existing object
// console.log(emp)
// emp.email = "vishankchauhan@gmail.com"
// emp['phone'] = "9873848046"
// emp["depatment"] = "Teaching"
// emp[`age`] = 32
// console.log(emp)

// let std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     city: "Noida"
// }
// std.email = "jeet@google.com"
// std["phone"] = "98725800"
// std['state'] = "UP"
// std[`country`] = "India"

// console.log(std);

// let std = {
//     id: 1002,
//     name: "Shreya Verma",
//     branch: "Automobile",
//     year: "Third Year",
//     city: "Noida"
// }
// std.email = "shreya@google.com"
// std["phone"] = "98725800"
// std['state'] = "UP"
// std[`country`] = "India"

// console.log(std);

//deleting object item
// delete emp.id
// delete emp['name']
// delete emp["dsg"]
// delete emp[`salary`]
// console.log(emp)

// let std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     city: "Noida"
// }
// std.email = "jeet@google.com"
// std["phone"] = "98725800"
// std['state'] = "UP"
// std[`country`] = "India"

// delete std.email
// delete std["phone"]
// delete std[`country`]

// console.log(std);

//Nesting of Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     dsg:"Trainer",
//     salary:135800,
//     subject:["Mern","Mean","Python","PHP"],
//     active:true,
//     address:{
//         house:1,
//         street:5,
//         nearby:"Water Plant",
//         pin:121002,
//         city:"Faridabad",
//         state:"Haryana"
//     }
// }
// console.log(emp)
// console.log(emp.subject)
// console.log(emp.subject[0])
// console.log(emp.address)
// console.log(emp.address.city)

// let std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     address: {
//         city: "Noida",
//         state: "UP",
//         gmail: "jeet@google.com"
//     }
// }

// console.log(std.name);
// console.log(std.year);
// console.log(std.address.gmail);


//functions or methods in Objects
// var obj = {
//     key1:"Value1",
//     key2:"Value2",
//     key3:"Value4",
//     fun1:function show(){
//         console.log("In show function of obj")
//     },
//     fun2:function display(){
//         console.log("In display function of obj")
//     },
//     fun3:function(){
//         console.log("In anonymous function of obj")
//     },
//     fun4:()=>console.log("In fat arrow function of obj"),
//     fun5(){
//         console.log("In Regular function of obj");
//     }
// }
// console.log(obj)
// obj.fun1()
// obj.fun2()
// obj.fun3()
// obj.fun4()
// obj.fun5()

// var std = {
//     key1: "value1",
//     key2: "value2",
//     fun1: function show() {
//         console.log("In show function obj1")
//     },
//     fun2: function display() {
//         console.log("In anyonmus function obj2")
//     },
//     fun3: () => {
//         console.log("This is fun3");
//     },
//     fun4() {
//         console.log("This is fun4")
//     }
// }
// console.log(std)
// std.fun1();
// std.fun2();
// std.fun3();
// std.fun4();

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basic:75000,
//     calculation(){
//         this.ta = this.basic*5/100
//         this.da = this.basic*8/100
//         this.hra = this.basic*10/100
//         this.ma = this.basic*15/100

//         this.gross = this.basic+this.ta+this.da+this.hra+this.ma
//         this.itax = this.gross*10/100
//         this.net = this.gross-this.itax
//     },
//     display(){
//         console.log(`
//             Id          :   ${this.id}
//             Name        :   ${this.name}
//             Designation :   ${this.dsg}
//             Basic Salary:   ${this.basic}
//             Ta          :   ${this.ta}
//             Da          :   ${this.da}
//             Hra         :   ${this.hra}
//             Ma          :   ${this.ma}
//             Gross Salary:   ${this.gross}
//             Income Tax  :   ${this.itax}
//             Net Salary  :   ${this.net}
//         `)
//     }
// }
// emp.calculation()
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basic:75000,
//     calculation:function(){
//         this.ta = this.basic*5/100
//         this.da = this.basic*8/100
//         this.hra = this.basic*10/100
//         this.ma = this.basic*15/100

//         this.gross = this.basic+this.ta+this.da+this.hra+this.ma
//         this.itax = this.gross*10/100
//         this.net = this.gross-this.itax
//     },
//     display:function(){
//         console.log(`
//             Id          :   ${this.id}
//             Name        :   ${this.name}
//             Designation :   ${this.dsg}
//             Basic Salary:   ${this.basic}
//             Ta          :   ${this.ta}
//             Da          :   ${this.da}
//             Hra         :   ${this.hra}
//             Ma          :   ${this.ma}
//             Gross Salary:   ${this.gross}
//             Income Tax  :   ${this.itax}
//             Net Salary  :   ${this.net}
//         `)
//     }
// }
// emp.calculation()
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basic:75000,
//     calculation:()=>{
//         emp.ta = emp.basic*5/100
//         emp.da = emp.basic*8/100
//         emp.hra = emp.basic*10/100
//         emp.ma = emp.basic*15/100

//         emp.gross = emp.basic+emp.ta+emp.da+emp.hra+emp.ma
//         emp.itax = emp.gross*10/100
//         emp.net = emp.gross-emp.itax
//     },
//     display:()=>{
//         console.log(`
//             Id          :   ${emp.id}
//             Name        :   ${emp.name}
//             Designation :   ${emp.dsg}
//             Basic Salary:   ${emp.basic}
//             Ta          :   ${emp.ta}
//             Da          :   ${emp.da}
//             Hra         :   ${emp.hra}
//             Ma          :   ${emp.ma}
//             Gross Salary:   ${emp.gross}
//             Income Tax  :   ${emp.itax}
//             Net Salary  :   ${emp.net}
//         `)
//     }
// }
// emp.calculation()
// emp.display()

/*
function/method call overhead problem: when we call a method of an object, then execution control switch from global execution context to method local execution context, then code of function will execute and after execution controll switch to global execution context, somtime this switching time is more the functions execution time, this is call function call overhead problem, to resolve this issue we can use setter and getter property instead of functiions or methods in objects
*/

//getter and setter
//get
//set

// const emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     set setSalary(num){
//         this.salary = num
//     },
//     get display(){
//         console.log(`
//             Id          :   ${this.id}
//             Name        :   ${this.name}
//             Designation :   ${this.dsg}
//             Salary      :   ${this.salary}
//         `);
//     }
// }
// emp.setSalary  = 135000
// emp.display

// const std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     set setSalary(num) {
//         this.salary = num
//     },
//     get display() {
//         console.log(`
//         id      : ${this.id}
//         name    : ${this.name}
//         branch  : ${this.branch}
//         year    : ${this.year}
//         `);
//     }
// }
// std.setSalary = 60000
// std.display

//object destructuring
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000,
//     city:"Noida",
//     state:"UP"
// }

// console.log(`
//     Id            :   ${emp.id}
//     Name          :   ${emp.name}
//     Designation   :   ${emp.dsg}
//     Salary        :   ${emp.salary}
//     City          :   ${emp.city}
//     State         :   ${emp.state}
// `)

// var {id,name,dsg,salary,city,state} = emp
// console.log(`
//     Id            :   ${id}
//     Name          :   ${name}
//     Designation   :   ${dsg}
//     Salary        :   ${salary}
//     City          :   ${city}
//     State         :   ${state}
// `)

// let std = {
//     id: 1001,
//     name: "Jeet Mahaur",
//     branch: "CSE",
//     year: "Third Year",
//     city: "Noida"
// }

// var {id, name, branch, year, city} = std

// console.log(`
// Id     : ${id}
// Name   : ${name}
// Branch : ${branch}
// Year   : ${year}
// City   : ${city}
// `)

//object constructor/object prototype
//need of object property
//solution

// const Employee = function(id,name,dsg,salary,city,state){
//     this.id = id
//     this.name = name
//     this.dsg = dsg
//     this.salary = salary
//     this.city = city
//     this.state = state
// }
// const emp1 = new Employee(1001,"Nitin Chauhan","Trainer",135000,"Faridabad","Haryana")
// const emp2 = new Employee(1002,"Deepak Singh Gusain","Trainer",135000,"Faridabad","Haryana")
// const emp3 = new Employee(1003,"Deepak Gupta","Trainer",135000,"Faridabad","Haryana")
// console.log(emp1)
// console.log(emp2)
// console.log(emp3)

// const Student = function (id, name, branch, year, city) {
//     this.id = id
//     this.name = name
//     this.branch = branch
//     this.year = year
//     this.city = city
// }

// const std = new Student(1001, "Jeet Mahaur", "CSE", "Third Year", "Noida")
// console.log(std);