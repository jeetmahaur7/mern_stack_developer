import React, { Component } from "react";
export default class Child extends Component {
  render() {
    return (
      <>
        <h2>This is Child Component</h2>
        <h3>Name:{this.props.name}</h3>
        <h3>Name:{this.props.dsg}</h3>
        <h3>Name:{this.props.salary}</h3>

        <table border={2} cellPadding={10}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Year</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.branch}</td>
                  <td>{item.year}</td>
                  <td>{item.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <>
//                 <h2>This is Child Component</h2>
//                 <h3>Name : {this.props.name}</h3>
//                 <h3>Designation : {this.props.dsg}</h3>
//                 <h3>Salary : {this.props.salary}</h3>

//                 <table border={2} cellPadding={10}>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Designation</th>
//                             <th>Salary</th>
//                             <th>City</th>
//                             <th>State</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.props.data.map((item, index) => {
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
