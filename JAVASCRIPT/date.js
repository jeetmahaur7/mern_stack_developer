//to set date and time
//1st Style : new Date() : return Current Date and time

// var a = new Date();
// console.log(a);
// console.log(a.toLocaleString());
// console.log(a.toLocaleDateString());
// console.log(a.toLocaleTimeString());

// var b = new Date();
// console.log(b);
// console.log(b.toLocaleString());
// console.log(b.toLocaleDateString());
// console.log(b.toLocaleTimeString());

// var c = new Date();
// console.log(c);
// console.log(c.toLocaleString());
// console.log(c.toLocaleDateString());
// console.log(c.toLocaleTimeString());


//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
//we have to specify atleast two items in Date
//if we pass a single argument in Date then it treat it as miliseconds

// var a = new Date(2024, 7, 12, 9, 35, 30, 200);
// console.log(a.toLocaleString());

// var b = new Date(2024, 7, 12, 9, 35, 30);
// console.log(b.toLocaleString());

// var c = new Date(2024, 7, 12, 9, 35);
// console.log(c.toLocaleString());

// var d = new Date(2024, 7, 12, 9);
// console.log(d.toLocsaleString());

// var e = new Date(2024, 7, 12);
// console.log(e.toLocaleString());

// var f = new Date(2024, 7);
// console.log(f.toLocaleString());

// var g = new Date(2024);
// console.log(g.toLocaleString());


// var a = new Date(2025, 8, 11, 10, 35, 30, 100);
// var b = new Date(2025, 8, 11, 10, 35, 30);
// var c = new Date(2025, 8, 11, 10, 35);
// var d = new Date(2025, 8, 11, 10);
// var e = new Date(2025, 8, 11);
// var f = new Date(2025, 8);
// var g = new Date(2025);

// console.log(a.toLocaleString());
// console.log(b.toLocaleString());
// console.log(c.toLocaleString());
// console.log(d.toLocaleString());
// console.log(e.toLocaleString());
// console.log(f.toLocaleString());
// console.log(g.toLocaleString());

// 3rd Style : new Date(miliseconds)

// var a = new Date(45454555);
// console.log(a.toLocaleString())

// var b = new Date(45454);
// console.log(b.toLocaleString())

// var c = new Date(455454);
// console.log(c.toLocaleString());


//4th Style : new Date(dateString)

// var a = new Date("2024/08/21");
// console.log(a.toLocaleString());

// var b = new Date("2024/08/21 9:30:5");
// console.log(b.toLocaleString());

// var c = new Date("2024/09/21 12:30:05");
// console.log(c.toLocaleString());

// var d = new Date("2023/01/24");
// console.log(d.toLocaleString());

// var e = new Date("2023/01/24 1:30:45");
// console.log(e.toLocaleString());

// var f = new Date("2023/01/24 1:30");
// console.log(f.toLocaleString());

//to get date and time

// var a=new Date()
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getUTCDate());
// console.log(a.getTime());//miliseconds since 1 Jan 1970
// console.log(a.getDay()); //week day
// console.log(Date.now());//miliseconds since 1 Jan 1970

// var b = new Date()
// console.log(b.getFullYear());
// console.log(b.getMonth());
// console.log(b.getDate());
// console.log(b.getHours());
// console.log(b.getMinutes());
// console.log(b.getSeconds());
// console.log(b.getMilliseconds());
// console.log(b.getUTCDate());
// console.log(b.getTime());
// console.log(b.getDay());
// console.log(Date.now());