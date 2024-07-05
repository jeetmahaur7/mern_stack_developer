import React from "react";
import ChildF from "./ChildF";

export default function ParentF(props) {
  let emp = [
    {
      id: 1001,
      name: "Jeet Mahaur",
      dsg: "Senior Developer",
      salary: 100000,
      city: "Noida",
    },
    {
      id: 1002,
      name: "Shreya Verma",
      dsg: "Senior Developer",
      salary: 90000,
      city: "Noida",
    },
    {
      id: 1001,
      name: "Riya Gaur",
      dsg: "Senior Developer",
      salary: 80000,
      city: "Noida",
    },
    {
      id: 1001,
      name: "Garima Lodhi",
      dsg: "Senior Developer",
      salary: 70000,
      city: "Noida",
    },
  ];
  return (
    <>
      <h1>Function Props Component</h1>
      <ChildF name="Shreya" dsg="Developer" salary={200000} data={emp} />
    </>
  );
}

// import React from "react";
// import ChildF from "./ChildF";

// export default function ParentF() {
//   let std = [
//     { id: 101, name: "Jeet Mahaur", dsg: "Developer", city: "Noida" },
//     { id: 102, name: "Shreya Verma", dsg: "Developer", city: "Noida" },
//     { id: 103, name: "Riya Gaur", dsg: "Developer", city: "Noida" },
//   ];

//   return (
//     <>
//       <h1>Functional Component Example to Send data from parent component to child component</h1>
//       <h2>This is parent component</h2>
//       <hr />
//       <ChildF name="Jeet Mahaur" dsg="Developer" salary={1200000} data={std} />
//     </>
//   );
// }

// import React from 'react'
// import ChildF from './ChildF'

// export default function ParentF() {
//     let emp = [
//         { id: 1001, name: "Sumit Sharma", dsg: "Trainer", salary: 135800, city: "Faridabad", state: "Haryana" },
//         { id: 1002, name: "Tarun Verma", dsg: "Trainer", salary: 65800, city: "Noida", state: "UP" },
//         { id: 1003, name: "Nitesh Tiwari", dsg: "Trainer", salary: 85800, city: "Noida", state: "UP" },
//         { id: 1004, name: "Rahul Sharma", dsg: "Manager", salary: 235800, city: "Kapur", state: "UP" },
//         { id: 1005, name: "Madhur Sharma", dsg: "Accountant", salary: 150800, city: "Faridabad", state: "Haryana" },
//     ]
//     return (
//         <>
//             <h1>Functional Component Example to Send Data from Parent Component to Child Component</h1>
//             <h2>This is Parent Component</h2>
//             <hr />
//             <ChildF name="Deepak Singh Gusain" dsg="Trainer" salary={98500} data={emp} />
//         </>
//     )
// }
