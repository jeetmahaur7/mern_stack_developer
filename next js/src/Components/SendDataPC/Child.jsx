// // import React from 'react'

// // export default function Child(props) {
// //     return (
// //         <>
// //             <h2>This is Child Component</h2>
// //             <h3>Name : {props.name}</h3>
// //             <h3>Array : {props.arr.join(" ")}</h3>
// //             <table border={2} cellPadding={10}>
// //                 <thead>
// //                     <tr>
// //                         <th>ID</th>
// //                         <th>Name</th>
// //                         <th>Designation</th>
// //                         <th>Salary</th>
// //                         <th>City</th>
// //                         <th>State</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {
// //                         props.empData?.map((item) => {
// //                             return <tr key={item.id}>
// //                                 <td>{item.id}</td>
// //                                 <td>{item.name}</td>
// //                                 <td>{item.dsg}</td>
// //                                 <td>{item.salary}</td>
// //                                 <td>{item.city}</td>
// //                                 <td>{item.state}</td>
// //                             </tr>
// //                         })
// //                     }
// //                 </tbody>
// //             </table>
// //         </>
// //     )
// // }

// import React from "react";

// export default function Child(props) {
//   return (
//     <>
//       <h3>{props.name}</h3>
//       <h3>{props.arr.join(" ")}</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Fee</th>
//             <th>City</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.std.map((item) => {
//             return (
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.course}</td>
//                 <td>{item.fee}</td>
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

// import React from "react";

// export default function Child(props) {
//   return (
//     <>
//       <h1>Child Component</h1>
//       <h3>Name : {props.name}</h3>
//       <h3>Array :{props.arr.join(", ")}</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>City</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.std.map((item) => {
//             return (
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.dsg}</td>
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

// Done
