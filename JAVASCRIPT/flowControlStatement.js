/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */

// if (true) {
//     console.log("Hello World 1");
//     console.log("Hello World 2");
//     console.log("Hello World 3");
// }
// console.log("Hello World 4");
// console.log("Hello World 5");
// console.log("Hello World 6");


// if (false) {
//     console.log("Hello World 1");
//     console.log("Hello World 2");
//     console.log("Hello World 3");
// }

// console.log("Hello World 4");
// console.log("Hello World 5");
// console.log("Hello World 6");


// if (false)
//     console.log("Hello World 1");
// console.log("Hello World 2");
// console.log("Hello World 3");
// console.log("Hello World 4");
// console.log("Hello World 5");

/*
if else Statement: used when execution of one Statement Block
                   out of two Statement blocks, depend on
                   a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
*/

// if (true) {
//     console.log("Hello World 1");
//     console.log("Hello World 2");
//     console.log("Hello World 3");
// }

// else {
//     console.log("Hello World 4");
//     console.log("Hello World 5");
//     console.log("Hello World 6");
// }

// if (false) {
//     console.log("Hello World 1");
//     console.log("Hello World 2");
//     console.log("Hello World 3");
// }

// else {
//     console.log("Hello World 4");
//     console.log("Hello World 5");
//     console.log("Hello World 6");
// }


// let num = Number(prompt("Enter the number: "))

// if (num % 2 == 0) {
//     document.write(`${num} is even`);
// }

// else {
//     document.write(`${num} is odd`);
// }


// 1. WAP to check whether a Person can Vote or not

// let age = Number(prompt("Enter Your Age: "));

// if (age >= 18) {
//     document.write(`You are eligble for vote`)
// }

// else {
//     document.write(`You are not eligble for vote`)
// }

// 2. WAP to check whether two numbers are equal or not

// let num1 = Number(prompt("Enter Your First Number: "));
// let num2 = Number(prompt("Enter Your Second Number: "));

// if (num1 === num2) {
//     document.write(`Numbers ${num1} and ${num2} are equal`);
// }

// else {
//     document.write(`Numbers ${num1} and ${num2} are not equal`);
// }


// 3. WAP to check whether a number if perfect square number or not

// let num = Number(prompt("Enter a number: "))
// if (num > 0 && Math.sqrt(num) % 1 == 0) {
//     document.write(`${num} is square number`);
// }
// else {
//     document.write(`${num} is not square number`);
// }


/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */

// let a = Number(prompt("Enter your first number: "));
// let b = Number(prompt("Enter your second number: "));
// let c = Number(prompt("Enter your third number: "));

// if (a < b) {
//     if (a < c) {
//         document.write(`${a} is smallest number`);
//     }
//     else {
//         document.write(`${c} is smallest number`)
//     }
// }

// else {
//     if (b < c) {
//         document.write(`${b} is smallest number`);
//     }
//     else {
//         document.write(`${c} is smallest number`)
//     }
// }

//WAP to check whether a year is leap year or not

// let year = Number(prompt("Enter Your Year: "));

// if (year % 400 === 0) {
//     document.write(`${year} is leap year`)
// }

// else if (year % 100 === 0) {
//     document.write(`${year} is not leap year`);
// }

// else if (year % 4 === 0) {
//     document.write(`${year} is leap year`);
// }

// else {
//     document.write(`${year} is not leap year`);

// }


/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// var d = Number(prompt("Enter the Fourth Number : "))
// var e = Number(prompt("Enter the Fifth Number : "))
// if (a >= b && a >= c && a >= d && a >= e)
//     document.write(`${a} is Greatest`)
// else if (b >= c && b >= d && b >= e)
//     document.write(`${b} is Greatest`)
// else if (c >= d && c >= e)
//     document.write(`${c} is Greatest`)
// else if (d >= e)
//     document.write(`${d} is Greatest`)
// else
//     document.write(`${e} is Greatest`)



// Wap to print day name when user enter any day number
// let dayNumber = Number(prompt("Enter your day number (1-7): "))
// if (dayNumber == 1) {
//     document.write("Monday")
// }

// else if (dayNumber == 2) {
//     document.write("Tuesday")
// }

// else if (dayNumber == 3) {
//     document.write("Wednesday")
// }

// else if (dayNumber == 4) {
//     document.write("Thursday")
// }

// else if (dayNumber == 5) {
//     document.write("Friday")
// }

// else if (dayNumber == 6) {
//     document.write("Saturday")
// }

// else if (dayNumber == 7) {
//     document.write("Sunday")
// }

// else {
//     document.write("Invaild Number")
// }


// WAP to print number of days in a month when use enter a month number

// let monthNumber = Number(prompt("Enter the month number: "))
// if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
//     document.write("31 days month")
// }

// else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
//     document.write("30 days month")
// }

// else if (monthNumber == 2) {
//     let year = Number(prompt("Enter the year: "))
//     if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
//         document.write("29 days month")
//     else (
//         document.write("28 days month")
//     )
// }

// else {
//     document.write("Invaild month number")
// }

// WAP to check whether an entered character is lower case vowel,lower case consonent,upper case vowel,upper case consonent,digit,space or any special character

// let ch = prompt("Enter a single character: ")
// if (ch.length != 1) {
//     document.write(`'${ch}' is not a valid input. Please Enter only a single character`)
// }

// else if (ch >= 'a' && ch <= 'z') {

//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//         document.write(`'${ch}' is a lower case vowel`)
//     else
//         document.write(`'${ch}' is a lower case constant`)
// }

// else if (ch >= 'A' && ch <= 'Z') {
//     if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//         document.write(`'${ch}' is a capital case vowel`)
//     else
//         document.write(`'${ch}' is a capital case constant`)
// }

// else if (ch >= 0 || ch <= 9) {
//     document.write(`'${ch}' is digit`)
// }

// else if (ch == '') {
//     document.write(`'${ch}' is a space`)
// }

// else {
//     document.write(`'${ch}' is a special character`)
// }

// WAP to make a simple calculator

// let num1 = Number(prompt("Enter Your First Number: "))
// let num2 = Number(prompt("Enter Your Second Number: "))
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Ramainder\nPress * for Mulitplication\nPress ** for Power\nEnter Your Choice : ")

// if (ch == '+') {
//     document.write(`${num1} + ${num2} = ${num1 + num2}`)
// }

// else if (ch == '-') {
//     document.write(`${num1} - ${num2} = ${num1 - num2}`)
// }

// else if (ch == '/') {
//     document.write(`${num1} / ${num2} = ${num1 / num2}`)
// }

// else if (ch == '%') {
//     document.write(`${num1} % ${num2} = ${num1 % num2}`)
// }

// else if (ch == '*') {
//     document.write(`${num1} * ${num2} = ${num1 * num2}`)
// }

// else if (ch == '**') {
//     document.write(`${num1} ** ${num2} = ${num1 ** num2}`)
// }

// else {
//     document.write(`Invaild Number`)
// }


/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(input or choice){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */

// let a = Number(prompt("Enter Your First Number: "));
// let b = Number(prompt("Enter Your Seocnd Number: "));
// let ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Ramainder\nPress * for Mulitplication\nPress ** for Power\nEnter Your Choice : ")

// switch (ch) {
//     case "+":
//         document.write(`${a} + ${b} =${a + b}`)
//         break

//     case "-":
//         document.write(`${a} - ${b} =${a - b}`)
//         break

//     case "/":
//         document.write(`${a} / ${b} =${a / b}`)
//         break

//     case "%":
//         document.write(`${a} % ${b} =${a % b}`)
//         break

//     case "*":
//         document.write(`${a} * ${b} =${a * b}`)
//         break

//     case "**":
//         document.write(`${a} ** ${b} =${a ** b}`)
//         break

//     default:
//         document.write(`Invaild Opreation`)
// }



// Wap to print day name when user enter any day number

// let day = Number(prompt(`Enter your number between 1-7: `))
// switch (day) {
//     case 1:
//         document.write("Monday")
//         break;
//     case 2:
//         document.write("Tuesday")
//         break;
//     case 3:
//         document.write("Wednesday")
//         break;
//     case 4:
//         document.write("Thursday")
//         break;
//     case 5:
//         document.write("Friday")
//         break;
//     case 6:
//         document.write("Saturday")
//         break;
//     case 7:
//         document.write("Sunday")
//         break;
//     default:
//         document.write("Invaild Number")
// }

// WAP to print number of days in a month when use enter a month number

// let month = Number(prompt("Enter the Month Number: "))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write("Month has 31 Days")
//         break

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write("Month has 30 Days")
//         break

//     case 2:
//         let year = Number(prompt("Enter The Year: "))
//         if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
//             document.write("Month has 29 Days")
//         }
//         else {
//             document.write("Month has 28 Days")
//         }
//         break

//     default:
//         document.write("Invaild Choice")
// }


/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation){
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */

// for (var i = 1; i <= 10; i++) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 1; i <= 10; ++i) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 10; i; i--) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 1; i <= 10; i = ++i) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 1; i <= 10; i = i++) {
//     console.log(` Hello World ${i}`);
// }

// for (var i = 1; i <= 10; i = i++);
// {
//     console.log(` Hello World ${i}`);
// }

// for(let i=1;i<=10;i++);
// {
//     console.log(`Hello World ${i}`)
// }

// for(let i=1;i<=10;i++)
// {
//     console.log(`Hello World ${i}`)
// }


// var i = 1;
// for (; ;) {
//     if (i > 10)
//         break
//     console.log(`Hello World ${i}`)
//     i++
// }


// for Loop Questions:
// 1. WAP to print sum of Even and Odd Numbers in specific Range

// let start = Number(prompt("Enter your starting number: "))
// let end = Number(prompt("Enter your ending number: "))
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0)
//         sumEven += i;
//     else
//         sumOdd += i;
// }
// document.write(`Sum of Even number ${sumEven}<br>`)
// document.write(`Sum of Odd number ${sumOdd}`)

// 2. WAP to print factorial of any specific number

// let num = Number(prompt("Enter your number :"))
// let f = 1;

// for (let i = 1; i <= num; i++) {
//     f = f * i;
// }
// i = i = 1;

// document.write(`The factorial of the number ${i} is: ${f}`)


// 3. WAP to check whether a number is perfect number or not

// let num = Number(prompt("Enter The Number:  "))
// let sum = 0;

// for (let i = 1; i <= num / 2; i++) {
//     if (num % i == 0)
//         sum = sum + i
// }

// if (sum == num)
//     document.write(`${num} is Perfect Number`)
// else
//     document.write(`${num} is not a Perfect Number`)

// 4. WAP to check whether a number is prime number or not

// let num = Number(prompt("Enter the number: "))
// let flag = false;

// for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) {
//         flag = true
//         break
//     }
// }

// if (num >= 2 && flag == false)
//     document.write(`${num} is Prime`)
// else
//     document.write(`${num} is not Prime`)


/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */

// var i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }


// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// while(num!=0){      //1452      145     14      1       0
//     let r = num%10  //2         5       4       1
//     sum = sum+r     //0+2=2     2+5=7   7+4=11  11+1=12
//     num = parseInt(num/10)//145 14      1       0
// }
// document.write(`sum = ${sum}`)


// while Loop Questions:

// 1. WAP to calculate sum of even and odd digits of a specific number

// let start= Number(prompt("Enter your starting number: "))
// let end= Number(prompt("Enter your ending number: "))
// let sumEven=0;
// let sumOdd=0;

// let i=start 
// while(i<=end){
//     i++
//     if(i%2==0)
//     sumEven +=1;
//     else
//     sumOdd +=1;

// }

// document.write(`Sum of even number ${sumEven}<br>`)
// document.write(`Sum of odd number ${sumOdd}`)

// 2. WAP to count even and odd digits in a number
// 3. WAP to reverse a number

// 4. WAP to check whether a number is NEON number or not (1,9)

// var n = Number(prompt("Enter the Number : "))
// var num = n*n       //9*9=81
// var sum = 0
// while(num!=0){          //81    8       0
//     let r = num%10      //1     8
//     sum = sum+r         //0+1=1 1+8=9
//     num = parseInt(num/10)//8   0
// }
// if(sum==n)
// document.write(`${n} is a Neon Number`)
// else
// document.write(`${n} is not a Neon Number`)

// 5. WAP to check whether a number is Armstrong number or not (1,153,370,371,407)

// var n = Number(prompt("Enter the Number : "))
// var d = 0
// var num = n
// while(num!=0){              //153   15  1   0
//     d++                     //1     2   3
//     num = parseInt(num/10)  //15    1   0
// }
// num = n
// var sum = 0
// while(num!=0){              //153       15          1           0
//     let r = num%10          //3         5           1
//     sum = sum+r**d          //0+3**3=27 27+5**3=152 152+1**3=153
//     num = parseInt(num/10)  //15        1           0
// }
// if(sum==n)
// document.write(`${n} is an Armstrong Number`)
// else
// document.write(`${n} is not an Armstrong Number`)

// 6. WAP to check whether a number is Palindrome Number or not (121,1234321)
// 7. WAP to check whether a number is Magical Number or not (81,1458,1729)

// var n = Number(prompt("Enter the Number : "))
// var sum = 0
// var rev = 0
// var num = n
// while(num!=0){          //1458  145     14      1       0
//     let r = num%10      //8     5       4       1
//     sum = sum+r         //0+8=8 8+5=13  13+4=17 17+1=18
//     num = parseInt(num/10)//145 14      1       0
// }
// num = sum
// while(num!=0){          //18        1           0
//     let r = num%10      //8         1
//     rev = rev*10+r      //0*10+8=8  8*10+1=81
//     num = parseInt(num/10)//1       0
// }
// if(sum*rev==n)
// document.write(`${n} is a Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)


/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

/*
Nested loops:
Loops within Loops:
 */




//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)


// Pattern

// *****
// *****
// *****
// *****

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write("*")
//     }
//     console.log();
// }

/*
12345
2345
345
45
5
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log();
// }

/*
12345
12345
12345
12345
12345
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log();
// }


/*
11111
22222
33333
44444
55555
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${i}`);
//     }
//     console.log();
// }



/*
12345
23456
34567
45678
56789
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <= 4; j++) {
//         process.stdout.write(`${i + j}`);
//     }
//     console.log();
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <=i+ 4; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log();
// }


/*
10101
10101
10101
10101
10101
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${j % 2}`);
//     }
//     console.log();
// }


/*
11111
00000
11111
00000
11111
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${i % 2}`);
//     }
//     console.log();
// }

/*
10101
01010
10101
01010
10101
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= i + 4; j++) {
//         process.stdout.write(`${j % 2}`);
//     }
//     console.log();
// }


/*
ABCDE
ABCDE
ABCDE
ABCDE
ABCDE
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${String.fromCharCode(j + 64)}`);
//     }
//     console.log();
// }

/*
1B3D5
1B3D5
1B3D5
1B3D5
1B3D5
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j % 2 == 0)
//             process.stdout.write(`${String.fromCharCode(j + 64)}`);
//         else
//             process.stdout.write(`${j}`);
//     }
//     console.log();
// }


/*
*
**
***
****
*****
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`*`);
//     }
//     console.log();
// }

/*
1
12
123
1234
12345
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log();
// }

/*
1
22
333
4444
55555
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`${i}`);
//     }
//     console.log();
// }

/*
1
12
333
1234
55555
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`${i % 2 == 0 ? j : i}`);
//     }
//     console.log();
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         process.stdout.write(`${j}`);
//     }
//     console.log();
// }


