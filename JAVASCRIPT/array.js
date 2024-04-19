/*
  Array:
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value
    -> mutable data type


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
// var a = [10,20,30,40,50,60,70,80,90,100,true,"Nitin","Ducat"]
// console.log(a)

// var b = [10, 20, 30, "Jeet"]
// console.log(b);

// var c = [30, 40, 80, "Math"]
// console.log(c);

// var d = [70, 120, 150, "Veer", 120]
// console.log(d);

//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50, 60, 70, 80, 90, 100)
// console.log(a)

// var b = []
// b.push(20);
// b.push(50);
// b.push(100);
// b.push("Jeet", 90, 150, 120)

// console.log(b);


// var c = []
// c.push(20);
// c.push(40)
// c.push(60)
// c.push(90)
// c.push(70, "Shreya", "Jeet", 90);

// console.log(c);

//3rd type : Array constructor

// var a = Array()
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50,60,70,80,90,100)
// console.log(a)

// var d = Array(10, 50, 30, 90);
// console.log(d);

// var e = Array(30, 40, 50, 90);
// console.log(e);

//4th type : Array constructor

// var a = Array()
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50,60,70,80,90,100)
// console.log(a)


// var f = Array()
// f.push(10)
// f.push(11)
// f.push(19)
// f.push(25)
// f.push(30, 35, "Jeet", 40, 45);
// console.log(f);

// var g = Array();
// g.push(11)
// g.push(15)
// g.push(20)
// g.push(41)
// g.push(31, "SRH", 45, 89)
// console.log(g);


//accessing array elements using entries()
var a = [10, 20, 30, 50, 60, 70, 100]

//accessing array elements using normal for loop

// Array using for Loop
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

//accessing array elements using while loop

// let i = 0
// while (i < a.length) {
//   console.log(a[i]);
//   i++
// }

//accessing array elements using do while loop

// let i = 0
// do {
//   console.log(a[i]);
//   i++
// } while (i < a.length)


//accessing array elements using for of loop

// for (let i in a) {
//   console.log(a[i]);
// }

//accessing array elements using for in loop

//Array using for of Loop
// for (let i in a) {
//   console.log(a[i]);
// }


//toString convert an array into string and use , as separator

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// document.write(a);
// console.log(a.toString());


/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// console.log(a.join());
// console.log(a.join(" "));
// console.log(a.join(" | "));
// console.log(a.join(" ; "));
// console.log(a.join(";"))
// console.log(a.join("; "))


/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
          and return updated length of array
pop()     delete an element from last of an array and return deleted
          array element
unshift() insert one or more then one element element in starting
          of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
          array element
splice()  used to insert or delete or update elements from any
          specific position of array and return array of deleted
          elements
          syntax:
          array.splice(pos,numberOfItemToDelete,[itemstoInsert])

delete  : it delete an item from array and leave empty space
*/

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(a);
// console.log(a.push(110));
// console.log(a);
// console.log(a.push(120, 130, 140, 150));
// console.log((a));

// console.log(a.unshift(5));
// console.log(a);
// console.log(a.unshift(1, 2, 3, 4, 5));
// console.log(a);

// console.log(a.pop());
// console.log(a);
// console.log(a.pop());
// console.log(a);

// console.log(a.shift());
// console.log(a);
// console.log(a.shift());
// console.log(a);

// console.log(a.splice(3, 5));
// console.log(a);
// console.log(a.splice(3, 0, 400, 500, 600, 700, 800))
// console.log(a);
// console.log(a.splice(2, 1, 110, 120, 130, 140, 150));
// console.log(a);

// delete a[5];
// console.log(a);
// delete a[8];
// console.log(a);

//slice() return a list of items from pos to pos

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]

// console.log(a);
// console.log(a.slice(5, 20));
// console.log(a.slice(6, 15))
// console.log(a.slice(8, 19));

//concat()

// var a = [10, 20, 30, 40, 50];
// var b = [60, 70, 80, 90, 100];
// var c = ["Jeet", "Shreya", "Riya", "Priya"];
// var d = [true, false, true, true, false]
// var e = ["200", "300", "400", "500", "600"]
// var f = a.concat(a, b, c, d, e);

// console.log(f);

//entries() generate an iterator which contains key and value of items

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]

// for (let item of a.entries()) {
//   console.log(item);
// }

// for (let index of a.entries()) {
//   console.log(index);
// }



/*
Higher Order functions and callback functions
Higher Order: a function which takes another function as a parameter
CallBack Function : a function which is passes as an argument in higher order function
*/

// function higherOrderFunction(callbackFun) {
//   console.log("In HigherOrderFunction")
//   callbackFun();
//   callbackFun();
//   callbackFun();
//   callbackFun();
//   console.log("Back to HigherOrderFunction")
// }

// higherOrderFunction(() => console.log("Call Back Function"));


//find()  : return the item from array which pass a text
//findIndex():retunn the index of item from array which pass a test
//map()   : return an array of containg result for all elements of array
//filter(): return an array of items that pass a test

// var a = [14, 12, 13, 17, 18, 19, 15, 20, 25, 24, 1, 25, 65, 45, 85, 12, 32, 50, 15, 17]

// function check(item) {
//   return item % 5 == 0
// }

// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

// console.log(a.find((item) => item % 5 == 0))
// console.log(a.findIndex((item) => item % 5 == 0))
// console.log(a.map((item) => item % 5 == 0))
// console.log(a.filter((item) => item % 5 == 0))

var a = [14, 12, 13, 17, 18, 19, 15, 20, 25, 24, 1, 25, 65, 45, 85, 12, 32, 50, 15, 17]

function check(item) {
  var falg = false
  for (let i = 2; i <= item ** 0.5; i++) {
    if (item % i == 0)
      flag = true
    break
  }
  if (item >= 2 && flag == false)
    return true
  else
    return false
}

// console.log(a.find(check))
// console.log(a.findIndex(check));
// console.log(a.map(check));
// console.log(a.filter(check));

// foreach()
// a.forEach((item) => console.log(item))


// reduce()

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
// function check(prev, current) {
//   return prev + current
// }

// console.log(a.reduce(check));

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 140, 170]
// function check(prev, current) {
//   return prev + current
// }

// console.log(a.reduce(check));



//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array


// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(a.indexOf(30));
// console.log(a.indexOf(3));
// console.log(a.indexOf(70));
// console.log(a.lastIndexOf(30));
// console.log(a.lastIndexOf(90));
// console.log(a.includes(30));
// console.log(a.includes(80));
// console.log(a.includes(30));
// console.log(a.includes(300));


//reverse()
// a.reverse()
// console.log(a);

// var b = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
// b.reverse()
// console.log(b)

//sort()

// var a = [100, 50, 7, 8, 9, 15, 20, 25, 45]
// a.sort((x, y) => x - y)
// console.log(a);

// var a = ["Jeet", "Shreya", "Garima", "Riya"]
// a.sort((x, y) => x - y)
// console.log(a);

// var a =["Nitin","Sumit","Ravi","Tarun","Vikash","Rahul","Amit","Anil"]
// a.sort((x,y)=>x-y)
// console.log(a)

//Array Destructuring

// var emp = [1001, "Nitin Chauhan", "Trainer", 135000, "Faridabaad", "Haryana"]
// console.log(`
// id             : ${emp[0]}
// name           : ${emp[1]}
// designation    : ${emp[2]}
// salary         : ${emp[3]}
// city           : ${emp[4]}
// state          : ${emp[3]}
// `)

// var emp = [1001, "Nitin Chauhan", "Trainer", 135000, "Faridabaad", "Haryana"]
// var [id, name, dsg, salary, city, state] = emp
// console.log(`
// id             : ${id}
// name           : ${name}
// designation    : ${dsg}
// salary         : ${salary}
// city           : ${city}
// state          : ${state}
// `);