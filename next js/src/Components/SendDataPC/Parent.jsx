// // import React from 'react'
// // import Child from './Child'

// // export default function Parent() {
// //     let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// //     let empData = [
// //         { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 135000, city: "Faridabad", state: "Haryana" },
// //         { id: 1002, name: "Deepak Singh Gusain", dsg: "Trainer", salary: 135000, city: "Noida", state: "UP" },
// //         { id: 1003, name: "Deepak Gupta", dsg: "Trainer", salary: 135000, city: "Noida", state: "UP" },
// //         { id: 1004, name: "Mamta Jain", dsg: "Trainer", salary: 135000, city: "East Delhi", state: "Delhi" },
// //         { id: 1005, name: "Nitin Mishra", dsg: "Accountant", salary: 235000, city: "Noida", state: "UP" },
// //     ]
// //     return (
// //         <>
// //             <h1>Sending Data From Parent to Child Component</h1>
// //             <h2>This is Parent Component</h2>
// //             <hr />
// //             <Child name="Nitin Chauhan" arr={arr} empData={empData} />
// //         </>
// //     )
// // }

// import React from "react";
// import Child from "./Child";

// export default function Parent() {
//   let arr = [10, 20, 30, 40, 50, true, "Jeet"];
//   let std = [
//     {
//       id: 1001,
//       name: "Jeet Mahaur",
//       course: "MERN",
//       fee: 20000,
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 1002,
//       name: "Shreya Verma",
//       course: "MERN",
//       fee: 20000,
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 1003,
//       name: "Riya Gaur",
//       course: "MERN",
//       fee: 20000,
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 1004,
//       name: "Shubham Gaut",
//       course: "MERN",
//       fee: 20000,
//       city: "Noida",
//       state: "UP",
//     },
//   ];
//   return (
//     <>
//       <Child name="Jeet Mahaur" arr={arr} std={std} />
//     </>
//   );
// }

// import React from "react";
// import Child from "./Child";

// export default function Parent() {
//   let arr = [10, 20, 30, 40, 50, "Jeet", true, Boolean];
//   let std = [
//     {
//       id: 101,
//       name: "Jeet",
//       dsg: "Founder",
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 102,
//       name: "Shubham",
//       dsg: "Director",
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 103,
//       name: "Kartik",
//       dsg: "Director",
//       city: "Noida",
//       state: "UP",
//     },
//   ];
//   return (
//     <>
//       <Child name="Shreya Verma" arr={arr} std={std} />
//     </>
//   );
// }
