import React, { Component } from "react";

export default class Child extends Component {

sendData(){
    this.props.getData({
        name:"Jeet Mahaur",
        dsg:"Developer",
        salary:10000,
        std:[
            {id:102,name:"Shreya Verma", dsg:"Traine", salary:90000},
            {id:103,name:"Riya Gaur", dsg:"Traine", salary:90000},
        ]
    })
}
    render() {
    return (
      <>
        <h1>This is Child Component</h1>
        <button onClick={() => sendData()}>Click to show parent data</button>
      </>
    );
  }
}

// import React, { Component } from 'react'

// export default class Child extends Component {
//     sendData() {
//         this.props.getData({
//             name: "Nitin Chauhan",
//             dsg: "Tariner",
//             salary: 135800,
//             emp: [
//                 { id: 1001, name: "Sumit Sharma", dsg: "Trainer", salary: 135800, city: "Faridabad", state: "Haryana" },
//                 { id: 1002, name: "Tarun Verma", dsg: "Trainer", salary: 65800, city: "Noida", state: "UP" },
//                 { id: 1003, name: "Nitesh Tiwari", dsg: "Trainer", salary: 85800, city: "Noida", state: "UP" },
//                 { id: 1004, name: "Rahul Sharma", dsg: "Manager", salary: 235800, city: "Kapur", state: "UP" },
//                 { id: 1005, name: "Madhur Sharma", dsg: "Accountant", salary: 150800, city: "Faridabad", state: "Haryana" },
//             ]
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h2>This is Child Component</h2>
//                 <button onClick={() => this.sendData()}>Click to Send Data to Parent Component</button>
//             </>
//         )
//     }
// }
