// var a = 10;
// var b = 10.5;
// var d = true;
// var e = true;
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(d, typeof d);
// console.log(e, typeof e);

// var a = 10;
// var b = 20;
// var sum = a + b;
// console.log(sum);
// console.log(a + " + " + b + " = " + sum);
// console.log(a + " + " + b + " + " + sum);
// console.log(`${a}+${b}=${sum}`);

// var p = 65.5325;
// var r = 12.36;
// var t = 5;
// var si = p * r * t / 100;
// var total = p + si;
// var emi = total / (t * 12);

// console.log("Principal Amount  :" + p);
// console.log("Rate Amount       :" + r);
// console.log("Time Amount       :" + t);
// console.log("Simple Intrest    :" + si.toFixed(2));
// console.log("Total Amount      :" + total.toFixed(2));
// console.log("EMI Amount        :" + emi.toFixed(2));


// console.log(`
// Principal Amount  :" + ${p}
// Rate Amount       :" + ${r};
// Time Amount       :" + ${t};
// Simple Intrest    :" + ${si.toFixed(2)};
// Total Amount      :" + ${total.toFixed(2)};
// EMI Amount        :" + ${emi.toFixed(2)}`);


// ++++++++++++++++++++++Execrcise+++++++++++++


//Qus 1: WAP to print area of circle :   area=3.14*r*r

var r = 2;
var area = 3.14 * r * r;

// console.log(area);

// Qus 2: WAP to print area of Rectangle :   area=l*b

var length = 15;
var width = 10;
var areaOfRectangle = length * width;

// console.log(areaOfRectangle);


// Qus 3: WAP to print area of cuboid :   2*(l*b + b*h + h*l)

var l = 3.2;
var h = 3.555;
var b = 5.666;
var cubid = 2 * (l * b + b * h + h * l);

// console.log(cubid);

// Qus 4: WAP to print area of Right Angle Triangle :   area =(base*height)/2

var base = 33.12;
var height = 222.333;
var area = (base * height) / 2;

// console.log(area.toFixed(2));

// Qus 5: WAP to print area of Square area = side*side

var side = 222;
var area = side * side;

// console.log(area);

// Qus 6:WAP to calculate temp. in F from C i.e f =  c*9/5+32

var c = 70;
var f = c * 9 / 5 + 32;
// console.log(f);

// Qus 7: WAP to calculate temp. in C from F i.e c =  (f-32)*5/9

var f = 95;
var c = (f - 32) * 5 / 9;
// console.log(c);

// Qus 8: WAP to swap value of two variables

var a = 10;
var b = 15;
var temp = a;
b = a;
a = temp;

// console.log(`a=${a} b=${b}`);