import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.std = [
      {
        id: 1001,
        name: "Jeet Mahaur",
        branch: "CSE",
        year: "3 Years",
        city: "Noida",
      },
      {
        id: 1002,
        name: "Shreya Verma",
        branch: "Autombile",
        year: "3 Years",
        city: "Noida",
      },
      {
        id: 1001,
        name: "Riya Gaur",
        branch: "Production",
        year: "3 Years",
        city: "Noida",
      },
      {
        id: 1001,
        name: "Garima Lodhi",
        branch: "Production",
        year: "3 Years",
        city: "Noida",
      },
    ];
  }
  render() {
    return (
      <>
        <Child
          name="Jeet Mahaur"
          dsg="Developer"
          salary={200000}
          data={this.std}
        />
      </>
    );
  }
}

// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     constructor() {
//         super()
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
//                 <h1>Class Component to Send Data From Parent to Child Component</h1>
//                 <h2>This is Parent Component</h2>
//                 <hr />
//                 <Child name="Nitin Chauhan" dsg="Trainer" salary={13500} data={this.emp} />
//             </>
//         )
//     }
// }
