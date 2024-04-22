/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
            eg. name.email etc

            immutable data type

            index start with 0
 */
//String Constant
// var a = 'Ducat Education'
// var b = "Hello World"
// var c = `
//             Ducat
//             Education
//             Noida
//         `
// console.log(a,typeof(a))
// console.log(b,typeof b)
// console.log(c,typeof c)

// var a = "MERN Stack Developer"
// var b = "New World"
// var c = `
//        MERN
//        Stack
//        Developer

//        `



// console.log(a);
// console.log(b);
// console.log(c);


// console.log(a, typeof (a));
// console.log(b, typeof b);
// console.log(c, typeof c);

//String using Loops

// var a = "Ducat Education Noida"

//string using for loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// var a = "Hello World"

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// var b = "Hello India"
// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
// }

// var c = "Don't disturb"
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i]);
// }

//string using while loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

// var b = "Don't use your phone"
// let i = 0
// while (i < b.length) {
//     console.log(b[i]);
//     i++
// }

// var c = "Keep your phone on silent"

// let i = 0
// while (i < c.length) {
//     console.log(c[i])
//     i++
// }

//string using do while loop
// let i=0
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)

// var b = "Keep your phone on silent"

// let i = 0
// do {
//     console.log(b[i])
//     i++
// } while (i < b.length)

// var c = "Honesty is the best policy"

// let i = 0
// do {
//     console.log(c[i])
//     i++
// } while (i < c.length)


//string using for in loop
// for(let i in a){
//     console.log(a[i])
// }

// var a = "Honesty is the best policy"
// for (let i in a) {
//     console.log(a[i]);
// }

// var b = "Don't skip this part"
// for (let i in b) {
//     console.log(b[i]);
// }

// var c = "Don't make a noise"
// for (let i in c) {
//     console.log(c[i]);
// }


//string using for of loop
// for(let i of a){
//     console.log(i)
// }


// var b = "Don't make a noise"
// for (let i of b) {
//     console.log(b[i])
// }

// var b = "Don't make a noise"
// for (let i of b) {
//     console.log(i);
// }

// var c = "Never give up"
// for (let i of c) {
//     console.log(c[i])
// }

// var c = "Never give up"
// for (let i of c) {
//     console.log(i)
// }


//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a.charAt(0))
// console.log(a[1])
// console.log(a.charAt(1))

// var b = "Never give up"
// console.log(b.charAt(0));
// console.log(b.charAt(4));
// console.log(b.charAt(6));

// console.log(b[0]);
// console.log(b[4]);
// console.log(b[6]);

//charCodeAt(): return Unicode of first character of String if no argument is provided, and if argument is provided it return UNICODE of that particular indexed value

// console.log(a.charCodeAt());
// for(let i in a){
//     console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }

// var b = "Believe in yourself"

// for (let i in b) {
//     console.log(`${b[i]}=${b.charCodeAt(i)}`)
// }

// var c = "Keep your phone on silence"

// for (let i in c) {
//     console.log(`${c[i]}=${c.charCodeAt(i)}`)
// }

// var d = "Keep your own business"
// for (let i in d) {
//     console.log(`${d[i]}=${d.charCodeAt(i)}`);
// }

/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

/*
fromCharCode(): convert a Unicode into Character
 */
// for(let i=0;i<10000;i++){
//     document.write(`${i} = ${String.fromCharCode(i)} `)
// }

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/
// console.log(a.indexOf("i"))
// console.log(a.indexOf("I"))
// console.log(a.lastIndexOf("i"))
// console.log(a.lastIndexOf("I"))
// console.log(a.search("i"))
// console.log(a.search("I"))
// console.log(a.includes("i"))
// console.log(a.includes("I"))

// Copy a string into another
// var b = a
// console.log(`Copied String is '${b}'`)


//concat() : concat one or more strings in a string
// var a = "Ducat"
// var b = "Education"
// var c = "Noida"
// var d = a + b + c
// var e = a.concat(b, c)
// console.log(d)
// console.log(e)

/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/
// var ch = prompt("Enter the String : ")
// if(ch.startsWith("www."))
// document.write(`'${ch}' is a Website Domain`)
// else if(ch.endsWith("@gmail.com"))
// document.write(`'${ch}' is a Gmail Id`)
// else
// document.write(`'${ch}' is a normal Message`)


//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()

// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())

//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()

// console.log(a)
// console.log(a.substr(7,10))
// console.log(a.substring(7,10))
// console.log(a.slice(7,10))
// console.log(a.slice(10))
// console.log(a.slice(-10))

//repeat()  :   create number of copies of a string
// console.log(a.repeat(50))


//replace()
//replaceAll()
// var a = "Javascript is a scripting Language"
// console.log(a)
// console.log(a.replace(" ","-"))
// console.log(a.replaceAll(" ","-"))
// console.log(a.replaceAll("script","sc"))
// console.log(a.replaceAll("a","A"))


//split()
// console.log(a.split(" "))

//trim() remove all leading white space characters from string from both side
//trimStart()remove all leading white space characters from string from left side   
//trimEnd()remove all leading white space characters from string from right side

// var a = "          Ducat Education Noida     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)

/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
// var a = "Nitin"
// var b = "Naman"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(a.localeCompare(a))