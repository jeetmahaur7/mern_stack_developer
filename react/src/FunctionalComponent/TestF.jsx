import React from "react";

export default function TestF() {
  let std = [
    {
      id: 101,
      name: "Jeet Mahaur",
      dsg: "MERN Stack Developer",
      city: "Noida",
      state: "UP",
    },
    {
      id: 102,
      name: "Shreya Verma",
      dsg: "MERN Stack Developer",
      city: "Noida",
      state: "UP",
    },
    {
      id: 103,
      name: "Riya Gaur",
      dsg: "MERN Stack Developer",
      city: "Noida",
      state: "UP",
    },
    {
      id: 104,
      name: "Garima Lodhi",
      dsg: "MERN Stack Developer",
      city: "Noida",
      state: "UP",
    },
  ];
  return (
    <>
      <h1>This is a function component for display variable</h1>
      <table border={2} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {std.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dsg}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// import React from "react";

// export default function TestF() {
//   let name = "Jeet Mahaur";
//   let arr = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
//   let std = [
//     {
//       id: 101,
//       name: "Jeet Mahaur",
//       course: "MERN Stack",
//       duration: "6 months",
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 102,
//       name: "Shreya Verma",
//       course: "MERN Stack",
//       duration: "6 months",
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 103,
//       name: "Riya Gaur",
//       course: "MERN Stack",
//       duration: "6 months",
//       city: "Noida",
//       state: "UP",
//     },
//     {
//       id: 104,
//       name: "Garima Lodhi",
//       course: "MERN Stack",
//       duration: "6 months",
//       city: "Noida",
//       state: "UP",
//     },
//   ];

//   return (
//     <>
//       <h1>This is a function component example for display</h1>
//       <h3>Name :{name}</h3>
//       <h3>Array: {arr.join(", ")}</h3>
//       <table border={2} cellPadding={10}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Duration</th>
//             <th>City</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {std.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.course}</td>
//                 <td>{item.duration}</td>
//                 <td>{item.city}</td>
//                 <td>{item.state}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// import React from 'react'
// export default function TestF() {
//     let name = "Deepak Singh Gusain"
//     let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 100]
//     let emp = [
//         { id: 101, name: "Deepak Singh Gusain", dsg: "Trainer", salary: 135800, city: "Faridabad", state: "Haryana" },
//         { id: 102, name: "Deepak Gupta", dsg: "Trainer", salary: 65800, city: "Noida", state: "UP" },
//         { id: 103, name: "Ritesh Deshmukh", dsg: "Trainer", salary: 85800, city: "Noida", state: "UP" },
//         { id: 104, name: "Nites Rana", dsg: "Manager", salary: 235800, city: "Kapur", state: "UP" },
//         { id: 105, name: "Sumit Thakur", dsg: "Accountant", salary: 150800, city: "Faridabad", state: "Haryana" },
//     ]
//     return (
//         <>
//             <h1>Functional Component Example to Display Variables</h1>
//             <h2>Name : {name}</h2>
//             <h2>Array : {arr.join()}</h2>
//             <table border={2} cellPadding={10}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Designation</th>
//                         <th>Salary</th>
//                         <th>City</th>
//                         <th>State</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         emp.map((item, index) => {
//                             return <tr key={index}>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.dsg}</td>
//                                 <td>{item.salary}</td>
//                                 <td>{item.city}</td>
//                                 <td>{item.state}</td>
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }
