/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritance   :   Code Reusability

    class is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types and behaviors means various functions

           class is a logical entity only, that mean class doesn't 
           have physical existance in memory, until its instance
           is created, and name of instance is called object
    syntax:
    class ClassName{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
 */
//class without constructor
// class Test {
//     show() {
//         console.log("In show() of Test Class")
//     }
//     display() {
//         console.log("In display() of Test Class")
//     }
// }
// var x = new Test()
// x.show()
// x.display()


// class Student {
//     show() {
//         console.log("Hello World !")
//     }
//     display() {
//         console.log("Display() of Student class")
//     }
// }

// var y = new Student()
// y.show()
// y.display();

// class Emp {
//     hello() {
//         console.log("Hello World !")
//     }

//     show() {
//         console.log("Show() of emp class")
//     }
// }

// var z = new Emp()
// z.hello()
// z.show()

// class Std {
//     hello() {
//         console.log("Hello World");
//     }
//     show() {
//         console.log("This is show() function");
//     }
// }

// var obj = new Std();
// obj.hello();
// obj.show();

// class Add{
//     setData(a,b){
//         this.a = a
//         this.b = b
//         this.sum = this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Add()
// var y = new Add()
// x.setData(10,20)

// x.display()
// y.display()


// class Magical{
//     setData(n){
//         this.n = n
//     }
//     check(){
//         let num = this.n
//         let sum = 0
//         let rev = 0
//         while(num!=0){
//             let r = num%10
//             sum = sum+r
//             num = parseInt(num/10)
//         }
//         num = sum
//         while(num!=0){
//             let r = num%10
//             rev = rev*10+r
//             num = parseInt(num/10)
//         }
//         if(sum*rev==this.n)
//         console.log(`${this.n} is a Magical Number`)
//         else
//         console.log(`${this.n} is not a Magical Number`)
//     }
// }
// var x = new Magical()
// x.setData(1729)
// x.check()

// x.setData(1279)
// x.check()

// x.setData(1458)
// x.check()

// x.setData(81)
// x.check()

// x.setData(18)
// x.check()

// x.setData(1548)
// x.check()

/*
OOPS Approachs:
1. Abstraction  :   Data Hiding i.e hiding complexity
                    showing functionality, we can hide
                    members using access specifiers
                    like public,private and protected,
                    (javaScript Doesn't Support
                    Abstraction)

2. Encapsulation:   Binding Data Members with
                    Member Functions/Methods
                    or
                    Wrapping-up data members with
                    member function

3. polymorphism :   Many forms of single entity
            1. Method Overloading : if we define
                    more then one function in a class
                    with same name but with different
                    signature(either number of arguments
                    must be different or their types
                    must be different)(JavaScript Doesn't
                    Support Method Overloading)
            2. Constructors and Destructor
                    we can use constructor in JavaScript
                    but we can't use destructor in JS
            3. Method Overriding: if both parent class
                    and child class having same named
                    members then child class override
                    parent's member i.e child class can
                    inherit only those member from
                    parent which child doesn't have
                    JS Support This Concept
            4. Operator Overloading:
                    if we provide user defined
                    defination to an existing
                    operator then this concept is
                    called operator overloading
                    JS Doesn't Support this feature
4. Inheritance: if we reuse member of any existing
                class in a new class is called
                inheritance
                JS Support this Concept


class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler(JIT) provide defination to constructor
    -> we can't return any value from a constructor
 */
// class Test{
//     constructor(){
//         console.log("Constructing Class Test")
//     }
//     show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         console.log("In display() of Test Class")
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()

// class Student {
//     constructor() {
//         console.log("Jeet Mahaur is good boy")
//     }
//     hello() {
//         console.log("Hello World!");
//     }
//     display() {
//         console.log("Shreya is good girl");
//     }
// }
// var obj = new Student()
// obj.hello();
// obj.display();

// class Std {
//     constructor() {
//         console.log("Jeet Mahaur is good boy");
//     }

//     hello() {
//         console.log("Hello World");
//     }

//     display() {
//         console.log("Riya is my ex");
//     }
// }

// var obj = new Std()
// obj.hello();
// obj.display();

// class Add {
//     constructor(a = 0, b = 0) {
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b
//     }
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Add(10, 20)
// var y = new Add()

// x.display()
// y.display()

// class Sub {
//     constructor(a = 0, b = 0) {
//         this.a = a
//         this.b = b
//         this.sub = this.a - this.b
//     }
//     display() {
//         console.log(`${this.a} - ${this.b} = ${this.sub}`)
//     }
// }
// var x = new Sub(20, 10)
// var y = new Sub();

// x.display();
// y.display();

// class Multi {
//     constructor(a = 0, b = 0) {
//         this.a = a;
//         this.b = b;
//         this.multi = this.a * this.b
//     }
//     display() {
//         console.log(`${this.a} * ${this.b} = ${this.multi}`)
//     }
// }
// var x = new Multi(10, 20)
// var y = new Multi()

// x.display();
// y.display();

/*
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 *
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 *
 * types:
 *  1. Single Inheritance
 *  2. Multilevel Inheritance
 *  3. Hierarchical Inheritance
 *
 * syntax:
 *  class Parent{
 *  -----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have
 */

// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){  //overridden Method
//         console.log("In display() of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         console.log("In display() of Child Class")
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()
// obj.display()

// class Student {
//     show1() {
//         console.log("Jeet is a good boy");
//     }
//     display() {
//         console.log("Show my name on display");
//     }
// }

// class Child extends Student {
//     show2() {
//         console.log("Shreya is a good girl");
//     }
//     display() {
//         console.log("Hello World!");
//     }
// }

// var obj = new Child();
// obj.show1();
// obj.show2();
// obj.display();

// class Emp {
//     show1() {
//         console.log("This is show1() function");
//     }
//     display() {
//         console.log("This is my parent class");
//     }
// }

// class Child extends Emp {
//     show2() {
//         console.log("This is show2() function");
//     }
//     display() {
//         console.log("Hello World !");
//     }
// }

// var obj = new Child();
// obj.show1();
// obj.show2();
// obj.display();


// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){  //overridden Method
//         console.log("In display() of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         super.display() //Accessing Overridden Method
//         console.log("In display() of Child Class")
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()
// obj.display()



// class Parent{
//     constructor(){
//         console.log("Constructing Parent Class")
//     }
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()

// class Student {
//     constructor() {
//         console.log("Constructing Parent Class");
//     }
//     show1() {
//         console.log("Jeet Mahaur");
//     }
// }
// class Child extends Student {
//     show2() {
//         console.log("Shreya Verma");
//     }
// }

// var obj = new Child();
// obj.show1();
// obj.show2();


// class Parent {
//     show1() {
//         console.log("In show1() of Parent Class")
//     }
// }
// class Child extends Parent {
//     constructor() {
//         super()
//         console.log("Constructing Child Class")
//     }
//     show2() {
//         console.log("In show2() of Child Class")
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()

// class Student {
//     show1() {
//         console.log("This is show1() function");
//     }
// }

// class Child extends Student {
//     constructor() {
//         super()
//         console.log("Constructing child class")
//     }
//     show2() {
//         console.log("This is show2()  function");
//     }

// }

// var obj = new Child()
// obj.show1();
// obj.show2();

//Single Inheritance: when a single child class inherit a
// class Parent{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
// }
// class Child extends Parent{
//     display(){
//         console.log(`${this.a} + ${this.b}  = ${this.a+this.b}`)
//     }
// }
// var x = new Child(10,20)
// x.display()

// class Student {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }
// class Child extends Student {
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
//     }
// }
// var x = new Child(10, 20);
// x.display();

// class Sub {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }
// class Child extends Sub {
//     display() {
//         console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
//     }
// }

// var obj = new Child(10, 20);
// obj.display();

// class Multi {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;

//     }
// }

// class Child extends Multi {
//     display() {
//         console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
//     }
// }

// var obj = new Child(10, 5);
// obj.display();





//multilevel Inheritance: when a child class inherit another child class
// class Parent{
//     constructor(){
//         this.a = [10,20,30,40,50,60,70,80,90,100]
//     }
// }
// class Child1 extends Parent{
//     display(){
//         console.log(this.a)
//     }
// }
// class Child2 extends Child1{
//     reverse(){
//         this.a.reverse()
//     }
// }
// var x = new Child2()
// console.log("Original Array is")
// x.display()

// x.reverse()
// console.log("Revered Array is")
// x.display()

//Hierarchical Inheriatnce: when a single parent class inherit by more then one child class

// class Sample {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
// }
// class Add extends Sample {
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
//     }
// }
// class Sub extends Sample {
//     display() {
//         console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
//     }
// }
// class Mul extends Sample {
//     display() {
//         console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)
//     }
// }
// class Div extends Sample {
//     display() {
//         console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)
//     }
// }
// class Mod extends Sample {
//     display() {
//         console.log(`${this.a} % ${this.b} = ${this.a % this.b}`)
//     }
// }
// class Pow extends Sample {
//     display() {
//         console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`)
//     }
// }
// var obj1 = new Add(15, 6)
// var obj2 = new Sub(15, 6)
// var obj3 = new Mul(15, 6)
// var obj4 = new Div(15, 6)
// var obj5 = new Mod(15, 6)
// var obj6 = new Pow(15, 6)
// obj1.display()
// obj2.display()
// obj3.display()
// obj4.display()
// obj5.display()
// obj6.display()
