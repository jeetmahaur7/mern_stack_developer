/*
Set:    collection of Unique Elements
        can't contain duplicate items
        set does not support indexing
        set is a mutable data type
 */

//how to make a set
// var a = [10,20,30,30,30,30,30,30,30,20,20,20,20,20,10,20,30,40,50,60,70,80,90,10,10,10,100,100,100,100,20,30,40,50,60,70,80,90,100,100,10,110,120,130,40,50,60,70,80,90,10]
// var c = Array.from(b);
// console.log(a);
// console.log(b);
// console.log(c);

// var c = [10, 10, 20, 30, 30, 40, 50, 50, 60, 60, 60, 70, 80, 90, 100]
// var d = new Set(c);
// var e = Array.from(d);
// console.log(c);
// console.log(d);
// console.log(e);

//add item to set
//add() used to add an item in set,do nothing if item already exist

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100]
// var b = new Set(a);
// b.add(100);
// console.log(b);
// b.add(110);
// console.log(b);
// b.add(120);
// console.log(b);

//delete() used to delete any particular item from Set
//do nothing if delete is empty

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100, 110]
// var b = new Set(a);
// b.delete()
// console.log(b);
// b.delete(100)
// console.log(b);
// b.delete(90)
// console.log(b);

//clear()   //remove all items from set

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100, 110]
// var b = new Set(a);
// b.clear();
// console.log(b);


//size: return size of set

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100, 110, 120, 120]
// var b = new Set(a);
// console.log(b.size);
// console.log(b.size);

//has() return true if item exist in set else return false

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100, 110, 120, 120]
// var b = new Set(a);
// console.log(b.has(100));
// console.log(b.has(200));
// console.log(b.has(10));
// console.log(b.has(400));

/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */

// var a = [10, 20, 30, 30, 30, 40, 50, 60, 70, 70, 80, 90, 100, 100, 110, 120, 120]
// var b = new Set(a);
// console.log(b.keys());
// console.log(b.values());
// console.log(b.entries());

//how to make a map
// var emp = new Map([
//     ["Nitin",135000],
//     ["Amit",75000],
//     ["Sumit",65000],
//     ["Tarun",45000],
//     ["Varun",25000],
//     ["Nitesh",75000],
//     ["Ankit",95000],
//     ["Ankita",105000],
//     ["Mohan",205000],
//     ["Mohan",25000]
// ])
// console.log(emp)

// var student = new Map ([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
// ])
// console.log(student);

//set() of map insert an item in map and if key already exist then
//set() update keys value

// var student = new Map([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
// ])
// student.set("City", "Noida")
// student.set("Country", "India")
// console.log(student);

//delete() used to delete any particular key from Map do nothing in case of Empty

// var student = new Map([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
//     ["City", "Noida"],
//     ["Country", "India"]
// ]);

// student.delete("City");
// console.log(student);

// student.delete("Year");
// console.log(student);

//clear()   //used to delete all items from Map

// var student = new Map([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
//     ["City", "Noida"],
//     ["Country", "India"]
// ]);

// student.clear();
// console.log(student);

//a.size  //return number of items of Map

// var student = new Map([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
//     ["City", "Noida"],
//     ["Country", "India"]
// ]);

// console.log(sstudent.size)

//has() : return true is map has an item else return false
// var student = new Map([
//     ["Name", "Jeet"],
//     ["Course", "MERN"],
//     ["Year", 2022],
//     ["City", "Noida"],
//     ["Country", "India"]
// ]);

// console.log(student.has("Name"))

/*
    values:     return an iterator containing all keys of map
    keys:       return an iterator containing all values of map
    entries:    return an iterator in pair if key,value 
                containing all items of map
 */
// console.log(student.keys())
// console.log(student.values())
// console.log(student.entries())