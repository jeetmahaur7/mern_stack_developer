import React from "react";

export default function ChildF(props) {
  return (
    <>
      <h2>This is child component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Name: {props.dsg}</h3>
      <h3>Name: {props.salary}</h3>
      <table border={2} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dsg}</td>
                <td>{item.salary}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// import React from "react";

// export default function ChildF(props) {
//   return (
//     <>
//       <h2>This is child component</h2>
//       <h3>Name: {props.name}</h3>
//       <h3>Designation: {props.dsg}</h3>
//       <h3>Salary: {props.salary}</h3>
//       <table border={2} cellPadding={10}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Designantion</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.data.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.dsg}</td>
//                 <td>{item.city}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// import React from 'react'

// export default function ChildF(props) {
//     return (
//         <>
//             <h2>This is Child Component</h2>
//             <h3>Name : {props.name}</h3>
//             <h3>Designation : {props.dsg}</h3>
//             <h3>Salary : {props.salary}</h3>
//             <table border={2} cellPadding={10}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Designation</th>
//                         <th>Salary</th>
//                         <th>City</th>
//                         <th>State</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         props.data.map((item, index) => {
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
