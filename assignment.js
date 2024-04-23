// A. function without return value without parameter

// 1. WAP to print sum of Even and Odd Numbers in specific Range
// function sumEvenOdd() {
//     var start = 1;
//     var end = 10;
//     var sumEven = 0;
//     var sumOdd = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             sumEven += i;
//         }
//         else {
//             sumOdd += i;
//         }
//     }
//     console.log(`Sum of even numbers:  ${sumEven}`);
//     console.log(`Sum of odd numbers:  ${sumOdd}`);
// }
// sumEvenOdd()

// 2. WAP to print factorial of any specific number

// function printFactorial() {
//     var num = 5;
//     var fact = 1;

//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     console.log(`Factorial of ${num} is ${fact}`)
// }

// printFactorial()

// 3. WAP to check whether a number is perfect number or not

// function checkPrefectNumber() {

//     var num = 28;
//     var sumOfDivisors = 0;

//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             sumOfDivisors += i;
//         }
//     }
//     if (sumOfDivisors == num) {
//         console.log(`${num} is a prefect number`)
//     }
//     else {
//         console.log(`${num} is not prefect number`)
//     }

// }

// checkPrefectNumber()

// 4. WAP to check whether a number is prime number or not

// function isPrimeNumber() {
//     var num = 13;
//     var isPrime = false;

//     for (let i = 2; i <= num ** 0.5; i++) {
//         if (num % i == 0) {
//             isPrime = true
//             break
//         }
//     }

//     if (num >= 2 && isPrime == false)
//         console.log(`${num} is Prime`)
//     else
//         console.log(`${num} is not Prime`)
// }

// isPrimeNumber()

// B. function with return value without parameter

// 5. WAP to calculate sum of even and odd digits of a specific number
// function sumEvenOddDigit() {
//     var num = 12345;
//     var evenSum = 0;
//     var oddSum = 0;

//     while (num > 0) {
//         var digit = num % 10
//         if (digit % 2 == 0) {
//             evenSum += digit;
//         }
//         else {
//             oddSum += digit
//         }
//         num = Math.floor(num / 10)
//     }
//     return {
//         evenSum: evenSum,
//         oddSum: oddSum,
//     };
// }
// let result = sumEvenOddDigit();
// console.log(`Sum of even digits : ${result.evenSum}`)
// console.log(`Sum of even digits : ${result.oddSum}`)

// 6. WAP to count even and odd digits in a number

// function countEvenOddDigits() {
//     var number = 123456789
//     var evenCount = 0;
//     var oddCount = 0;

//     while (number > 0) {
//         const digit = number % 10;
//         if (digit % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//         number = Math.floor(number / 10);
//     }

//     return { evenCount: evenCount,
//             oddCount: oddCount };
// }
//     const result = countEvenOddDigits()
//     console.log(`Even digits: ${ result.evenCount }`);
//     console.log(`Odd digits: ${ result.oddCount }`);

// 7. WAP to reverse a number

// function reverseNumber() {

//     var number = 123456789
//     var reversedNumber = 0;

//     while (number > 0) {
//         reversedNumber = reversedNumber * 10 + number % 10;
//         number = Math.floor(number / 10);
//     }
//     return reversedNumber
// }

//     result = reverseNumber()
//     console.log(`Reverse Number: ${ result }`);

// 8. WAP to check whether a number is NEON number or not (1,9)

// function isNeonNumber() {
//     var num = 9;
//     var square = num * num;

//     var sum = 0
//     while (square > 0) {
//         var digit = square % 10;
//         sum += digit
//         square = Math.floor(square / 10);
//     }
//     return sum === num;

// }

// result = isNeonNumber();
// if (result) {
//     console.log(`The number is a Neon number.`);
// } else {
//     console.log(`The number is not a Neon number.`);
// }

// C. function without return value with parameter

// 9. WAP to check whether a number is Armstrong number or not (1,153,370,371,407)
// function checkArmstrongNumber(num) {
//     var realNum = num;
//     var numDigits = String(num).length
//     var sum = 0;
//     while (num > 0) {
//         var digit = num % 10;
//         sum += Math.pow(digit, numDigits);
//         num = Math.floor(num / 10)
//     }
//     if (sum === realNum) {
//         console.log(`${realNum} is an armstrong number`)
//     }
//     else {
//         console.log(`${realNum} is not an armstrong number`)
//     }
// }
// checkArmstrongNumber(153);
// checkArmstrongNumber(123);
// checkArmstrongNumber(143);

// 10. WAP to check whether a number is Palindrome Number or not (121,1234321)

// function isPalindromeNumber(num) {
//     var realNum = num;
//     var reversedNum = 0;
//     for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//         let digit = temp % 10;
//         reversedNum = (reversedNum * 10) + digit;
//     }
//     if (realNum === reversedNum) {
//         console.log(`${realNum} is a Palindrome number.`)
//     }
//     else {
//         console.log(`${realNum} is not a Palindrome number.`)
//     }
// }
// isPalindromeNumber(121)
// isPalindromeNumber(1234321)
// isPalindromeNumber(12343215)

// 11. WAP to check whether a number is Magical Number or not (81,1458,1729)

// function isMagicalNumber(number) {
//     let num = number;

//     while (num > 9) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         num = sum;
//     }

//     if (num === 1) {
//         console.log(number + " is a Magical number.");
//     } else {
//         console.log(number + " is not a Magical number.");
//     }
// }

// isMagicalNumber(19)
// isMagicalNumber(81)


// 12. WAP to print  all perfect numbers(6,28,496,8128)

// function isPrefectNumber(limit) {
//     for (var num = 1; num <= limit; num++) {
//         var sum = 0;
//         for (let i = 1; i < num; i++) {
//             if (num % i == 0) {
//                 sum += i;
//             }
//         }
//         if (sum == num) {
//             console.log(`${num} is a prefect number`)
//         }
//     }
// }

// isPrefectNumber(1000000)

// D. function with return value with parameter

// 13. WAP to print and count all palindrome numbers in a range
// function countPalindromeRange(start, end) {
//     var palindromeCount = 0;
//     for (let num = start; num <= end; num++) {
//         if (isPalindrome(num)) {
//             palindromeCount++;
//             console.log(`${num} is a palindrome number`)
//         }
//     }
//     return palindromeCount;
// }
// function isPalindrome(number) {
//     var reverseNumber = 0;
//     var realNumber = number;
//     while (number > 0) {
//         var digit = number % 10;
//         reverseNumber = (reverseNumber * 10) + digit;
//         number = Math.floor(number / 10)
//     }
//     return realNumber == reverseNumber
// }
// var start = 100;
// var end = 200;
// var palindromeCount = countPalindromeRange(start, end);
// console.log(`Total of numbers between ${start} and ${end} : ${palindromeCount}`)


// 14. WAP to print and count all armstrong numbers(153,370,371,407)
// function countArmstrongNumber(start, end) {
//     var armstrongCount = 0;
//     for (let num = start; num <= end; num++) {
//         if (isArmstrong(num)) {
//             armstrongCount++;
//             console.log(`${num} is an armstrong number`)
//         }
//     }
//     return armstrongCount;
// }
// function isArmstrong(number) {
//     var numDigits = String(number).length;
//     var sum = 0;
//     var temp = number;
//     while (temp > 0) {
//         var digit = temp % 10;
//         sum += Math.pow(digit, numDigits);
//         temp = Math.floor(temp / 10);
//     }
//     return sum == number
// }
// var start = 100;
// var end = 1000;
// let armstrongCount = countArmstrongNumber(start, end);
// console.log(`Total Armstrong numbers between ${start} and ${end} : ${armstrongCount}`)

// 15. WAP to print all magical Numbers (81,1458,1729)

// function findMagicalNumbersInRange(start, end) {
//     var magicalNumbers = [];

//     for (var num = start; num <= end; num++) {
//         if (isMagicalNumber(num)) {
//             magicalNumbers.push(num);
//         }
//     }

//     return magicalNumbers;
// }

// function isMagicalNumber(number) {
//     var num = number;

//     while (num > 9) {
//         var sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         num = sum;
//     }

//     return num === 1;
// }

// var start = 10;
// var end = 1000;
// var magicalNumbersInRange = findMagicalNumbersInRange(start, end);
// console.log("Magical numbers between", start, "and", end, ":", magicalNumbersInRange);

// 16. WAP to print and count prime numbers in range

// function countPrimeNumber(start, end) {
//     var primeCount = 0;
//     for (var num = start; num <= end; num++) {
//         if (isPrime(num)) {
//             primeCount++;
//             console.log(`${num} is a prime number`)
//         }
//     } return primeCount;
// }
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     else if (number <= 3) {
//         return true;
//     }
//     else if (number % 2 == 0 || number % 3 == 0) {
//         return false;
//     }
//     for (let i = 5; i * i <= number; i += 6) {
//         if (number % i === 0 || number % (i + 2) === 0) {
//             return false;
//         }
//         return true;
//     }
// }
// let start = 1;
// let end = 100;
// let primeCount = countPrimeNumber(start, end)
// console.log(`Total prime numbers between ${start} and  ${end} : ${primeCount}`)