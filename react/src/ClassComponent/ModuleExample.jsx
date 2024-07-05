import React, { Component } from "react";

export var name1 = "Jeet Mahaur";
export var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export var std1 = {
  id: 1001,
  name: "Jeet Mahaur",
  course: "MERN",
  duration: "6 months",
};

export function display1() {
  return <h1>This is display1() function component</h1>;
}

export default class ModuleExample extends Component {
  render() {
    return (
      <>
        <h3>This is a class module component</h3>
      </>
    );
  }
}

// import React, { Component } from "react";

// var name1 = "Jeet Mahaur";
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var std1 = {
//   id: 1001,
//   name: "Jeet Mahaur",
//   course: "MERN",
//   duration: "6 Months",
// };

// function display1() {
//   return <h1>In dispaly1() ModuleExample Component</h1>;
// }

// class ModuleExample extends Component {
//   render() {
//     return (
//       <>
//         <h1>This is a class Module Example</h1>
//       </>
//     );
//   }
// }

// export default ModuleExample;
// export { name1, arr1, display1, std1 };

// import React, { Component } from 'react'

// export var name1 = "Nitin Chauhan"
// export var arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// export var emp1 = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Triner",
//     salary: 135800,
//     city: "Faridabad",
//     state: "Haryana"
// }
// export function display1() {
//     return <h3>In Display1 of ModuleExample  Component</h3>
// }
// export default class ModuleExample extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Class Component Module Example</h1>
//             </>
//         )
//     }
// }

// import React, { Component } from 'react'

// var name1 = "Nitin Chauhan"
// var arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// var emp1 = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Triner",
//     salary: 135800,
//     city: "Faridabad",
//     state: "Haryana"
// }
// function display1() {
//     return <h3>In Display1 of ModuleExample  Component</h3>
// }
// class ModuleExample extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Class Component Module Example</h1>
//             </>
//         )
//     }
// }
// export default ModuleExample            //default export
// export { name1, arr1, emp1, display1 }  //name export
