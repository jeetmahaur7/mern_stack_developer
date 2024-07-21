// var name = "Nitin Chauhan";
// module.exports = name

// var name = "Jeet Mahaur"
// module.exports = name

// var name = 'Shreya Verma'
// module.exports = name

// var num = 12345;
// module.exports = num

// var arr = [10, 20, 30, 40, 50];
// module.exports = arr;

var name = "Nitin Chauhan";
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 135800,
    city: "Noida",
    state: "UP",
}

function fun() {
    console.log("In fun() function of test1 module")
}

class Example {
    show() {
        console.log("In show() of example class")
    }
}

// module.exports = [
//     name,
//     arr,
//     emp,
//     fun,
//     Example,
// ]

module.exports = {
    name,
    arr,
    emp,
    fun,
    Example
}