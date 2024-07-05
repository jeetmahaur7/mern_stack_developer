import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
    this.name = "Jeet Mahaur";
    this.arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    this.std = [
      {
        id: 1001,
        name: "Jeet Mahaur",
        course: "MERN Stack",
        duration: "6 Months",
        city: "Noida",
        state: "UP",
      },
      {
        id: 1002,
        name: "Shreya Verma",
        course: "MERN Stack",
        duration: "6 Months",
        city: "Noida",
        state: "UP",
      },
      {
        id: 1003,
        name: "Riya Gaur",
        course: "MERN Stack",
        duration: "6 Months",
        city: "Noida",
        state: "UP",
      },
      {
        id: 1004,
        name: "Garima Lodhi",
        course: "MERN Stack",
        duration: "6 Months",
        city: "Noida",
        state: "UP",
      },
    ];
  }
  render() {
    return (
      <>
        <h1>This is a class Component example for display variable</h1>
        <h3>Name: {this.name}</h3>
        <h3>Array: {this.arr}</h3>
        <table border={2} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Duration</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {this.std.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.duration}</td>
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
}

// import React, { Component } from "react";

// export default class Test extends Component {
//   constructor() {
//     super();
//     this.name = "Jeet Mahaur";
//     this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     this.std = [
//       {
//         id: 1001,
//         name: "Jeet Mahaur",
//         course: "MERN Stack Developer",
//         duration: "6 Months",
//       },
//       {
//         id: 1002,
//         name: "Shreya Verma",
//         course: "MERN Stack Developer",
//         duration: "6 Months",
//       },
//       {
//         id: 1003,
//         name: "Riya Gaur",
//         course: "MERN Stack Developer",
//         duration: "6 Months",
//       },
//       {
//         id: 1004,
//         name: "Garima Lodhi",
//         course: "MERN Stack Developer",
//         duration: "6 Months",
//       },
//     ];
//   }

//   render() {
//     return (
//       <>
//         <h1>Class Component Example for Display Variables</h1>
//         <h3>Name: {this.name}</h3>
//         <h3>Array: {this.arr.join(",")}</h3>
//         <table border={2} cellPadding={10}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Duration</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.std.map((item, index) => {
//               return <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.course}</td>
//                 <td>{item.duration}</td>
//               </tr>;
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react'

// export default class Test extends Component {
//     constructor() {
//         super()
//         this.name = "Nitin Chauhan"
//         this.arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//         this.emp = [
//             { id: 1001, name: "Sumit Sharma", dsg: "Trainer", salary: 135800, city: "Faridabad", state: "Haryana" },
//             { id: 1002, name: "Tarun Verma", dsg: "Trainer", salary: 65800, city: "Noida", state: "UP" },
//             { id: 1003, name: "Nitesh Tiwari", dsg: "Trainer", salary: 85800, city: "Noida", state: "UP" },
//             { id: 1004, name: "Rahul Sharma", dsg: "Manager", salary: 235800, city: "Kapur", state: "UP" },
//             { id: 1005, name: "Madhur Sharma", dsg: "Accountant", salary: 150800, city: "Faridabad", state: "Haryana" },
//         ]
//     }
//     render() {
//         return (
//             <>
//                 <h1>Class Component Example to Display Variables</h1>
//                 <h2>Name : {this.name}</h2>
//                 <h2>Array : {this.arr.join()}</h2>
//                 <table border={2} cellPadding={10}>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Designation</th>
//                             <th>Salary</th>
//                             <th>City</th>
//                             <th>State</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.emp.map((item, index) => {
//                                 return <tr key={index}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.dsg}</td>
//                                     <td>{item.salary}</td>
//                                     <td>{item.city}</td>
//                                     <td>{item.state}</td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </>
//         )
//     }
// }
