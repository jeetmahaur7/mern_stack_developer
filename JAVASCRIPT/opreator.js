/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority:
                1. Brackets
                2. **
                3. * / %
                4. + -
 */
// console.log(15+6)       //21
// console.log("15"+6)     //156
// console.log("15"+"6")   //156
// console.log(15+"Hello World") //15Hello World

// console.log(15-6)       //9
// console.log("15"-6)     //9
// console.log("15"-"6")   //9
// console.log(15-"Hello World") //NaN

// console.log(15*6)       //90
// console.log("15"*6)     //90
// console.log("15"*"6")   //90
// console.log(15*"Hello World") //NaN

// console.log(15/6)       //2.5
// console.log("15"/6)     //2.5
// console.log("15"/"6")   //2.5
// console.log(15/"Hello World") //NaN

// console.log(15%6)       //3
// console.log("15"%6)     //3
// console.log("15"%"6")   //3
// console.log(15%"Hello World") //NaN

// console.log(15**6)       //11390625
// console.log("15"**6)     //11390625
// console.log("15"**"6")   //11390625
// console.log(15**"Hello World") //NaN

// var a = 10*3%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*(4*2**5%100)*3
// console.log(a)

/*
10*3%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*(4*2**5%100)*3
10*3%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*(4*32%100)*3
10*3%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*(128%100)*3
10*3%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*28*3
30%40/6*10%50*5%60/2-10%15*5/10*5+5*5%10*28*3
30/6*10%50*5%60/2-10%15*5/10*5+5*5%10*28*3
5*10%50*5%60/2-10%15*5/10*5+5*5%10*28*3
50%50*5%60/2-10%15*5/10*5+5*5%10*28*3
0*5%60/2-10%15*5/10*5+5*5%10*28*3
0%60/2-10%15*5/10*5+5*5%10*28*3
0/2-10%15*5/10*5+5*5%10*28*3
0-10%15*5/10*5+5*5%10*28*3
0-10*5/10*5+5*5%10*28*3
0-50/10*5+5*5%10*28*3
0-5*5+5*5%10*28*3
0-25+5*5%10*28*3
0-25+25%10*28*3
0-25+5*28*3
0-25+140*3
0-25+420
-25+420
395
*/

// var a = 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*5**3/1000)
// console.log(a)
/*
15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*5**3/1000)
15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*125/1000)
15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(625/1000)
15*5%60*3+45/10*2*5%55/9*10%5000+2*5%0.62
75%60*3+45/10*2*5%55/9*10%5000+2*5%0.62
15*3+45/10*2*5%55/9*10%5000+2*5%0.62
45+45/10*2*5%55/9*10%5000+2*5%0.62
45+4.5*2*5%55/9*10%5000+2*5%0.62
45+9*5%55/9*10%5000+2*5%0.62
45+45%55/9*10%5000+2*5%0.62
45+45/9*10%5000+2*5%0.62
45+5*10%5000+2*5%0.62
45+50%5000+2*5%0.62
45+50+2*5%0.62
45+50+10%0.62
45+50+10%0.62
45+50+0
95+0
95
 */
/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/
// var a = 10
// var b = 20
// a+=b
// console.log(a)

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check valye and data type both)
 */
// console.log(10<20)          //true
// console.log(10<10)          //false
// console.log(10<5)           //false

// console.log(10<=20)          //true
// console.log(10<=10)          //true
// console.log(10<=5)           //false

// console.log(10>20)          //false
// console.log(10>10)          //false
// console.log(10>5)           //true

// console.log(10>=20)          //false
// console.log(10>=10)          //true
// console.log(10>=5)           //true

// console.log(10==10)         //true
// console.log(10==20)         //false
// console.log(10=="10")       //true

// console.log(10===10)         //true
// console.log(10===20)         //false
// console.log(10==="10")       //false

// console.log(10!=10)             //false
// console.log(10!=20)             //true
// console.log(10!="10")           //false

// console.log(10!==10)             //false
// console.log(10!==20)             //true
// console.log(10!=="10")           //true

/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return
                        false if condition is
                        true

Note: 0 false null undefined empty string are false
      all other values are true
 */
// console.log(true && true)   //true i.e true
// console.log(10 && 20)       //true i.e 20
// console.log(10 && 0)        //false i.e 0
// console.log(0 && 20)        //false i.e 0
// console.log(0 && 0)         //false i.e 0
// console.log(false && 0)     //false i.e false

// console.log(true || true)   //true i.e true
// console.log(10 || 20)       //true i.e 10
// console.log(10 || 0)        //true i.e 10
// console.log(0 || 20)        //true i.e 20
// console.log(0 || 0)         //false i.e 0
// console.log(false || 0)     //false i.e 0

// console.log(!0)                 //true
// console.log(!10)                //false

/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
*/
// var a = 55
// var b = 79
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e)

/*
a:55    i.e     0   1   1   0   1   1   1
b:79    i.e     1   0   0   1   1   1   1
-------------------------------------------
c=a&b           0   0   0   0   1   1   1
                64  32  16  8   4   2   1
                -------------------------
                0   0   0   0   4   2   1=>7
--------------------------------------------
d=a|b           1   1   1   1   1   1   1
                64  32  16  8   4   2   1
                ----------------------------
                64  32  16  8   4   2   1=>127
----------------------------------------------
e=a^b           1   1   1   1   0   0   0
                64  32  16  8   4   2   1
                ----------------------------
                64  32  16  8   0   0   0=>120
*/

// var a = 68
// var b = 93
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e)

/*
a:68    i.e     1   0   0   0   1   0   0
b:93    i.e     1   0   1   1   1   0   1
-----------------------------------------
c=a&b           1   0   0   0   1   0   0
                64  32  16  8   4   2   1
                --------------------------
                64  0   0   0   4   0   0=>68
---------------------------------------------
d=a|b           1   0   1   1   1   0   1
                64  32  16  8   4   2   1
                --------------------------
                64  0   16  8   4   0   1=>93
---------------------------------------------
e=a^b           0   0   1   1   0   0   1
                64  32  16  8   4   2   1
                --------------------------
                0   0   16  8   0   0   1=>25
 */
// var a = 17
// var b = 33
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e)

/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */

/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a = 20
// var b = -30
// console.log(~a)
// console.log(~b)
// console.log(-a)
// console.log(-b)
/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */

// var num = Number(prompt("Enter the Number : "))
// num%2==0?
// document.write(`${num} is Even`):
// document.write(`${num} is Odd`)

/*
1. WAP to check whether a Person can Vote or not

let age=Number(prompt("Enter Your Age: "));
age>=18;
document.write(`${age} your are eligble for vote`)
document.write(`${age} your are not eligble for vote`)

2. WAP to check whether two numbers are equal or not

let num=Number(prompt("Enter Your Age: "));
num%2===0;
document.write(`${num} number is equal`)
document.write(`${num} number is not equal`)


3. WAP to check whether a number if perfect square number or not

var num = Number(prompt("Enter the Number : "))
// var n = parseInt(Math.sqrt(num))
var n = parseInt(num**0.5)
n*n==num?
document.write(`${num} is Perfect Square Number`):
document.write(`${num} is not a Perfect Square Number`)
*/


/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */

// var a = 10
// var b = a++ //b = 10    a = 11
// var c = ++a //a = 12    c = 12
// var d = a-- //d = 12    a = 11
// var e = --a //a = 10    e = 10
// --a         //a = 9
// a--         //a = 8
// console.log(a,b,c,d,e)


// var a = 10
// var b = a++ + ++a
// console.log(a,b)


// var a = 10
// var b = --a - a--
// var c = a-- - a-- + b-- - --b
// console.log(a,b,c)


// var a = 10
// var b = a-- + --a
// var c = --a - a++ + ++b - b++
// var d = a++ - a++ - b++ - ++b - c-- - --c
// console.log(a,b,c,d)