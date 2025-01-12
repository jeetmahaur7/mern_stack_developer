// "use client"
// import React, { useState } from 'react'
// import Child from './Child'

// export default function Parent() {
//     let [data, setData] = useState([])

//     function getData(records) {
//         setData(records)
//     }
//     return (
//         <>
//             <h1>Lifting State UP Example</h1>
//             <h2>Sending Data from Child to Parent Component</h2>
//             {
//                 data.length ?
//                     <table border={2} cellPadding={10}>
//                         <thead>
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Name</th>
//                                 <th>Designation</th>
//                                 <th>Salary</th>
//                                 <th>City</th>
//                                 <th>State</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 data?.map((item) => {
//                                     return <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.dsg}</td>
//                                         <td>{item.salary}</td>
//                                         <td>{item.city}</td>
//                                         <td>{item.state}</td>
//                                     </tr>
//                                 })
//                             }
//                         </tbody>
//                     </table> : null
//             }
//             <hr />
//             <Child getData={getData}/>
//         </>
//     )
// }

// "use client";
// import React, { useState } from "react";
// import Child from "./Child";

// export default function Parent() {
//   let [data, setData] = useState([]);

//   function getData(records) {
//     setData(records);
//   }
//   return (
//     <>
//       <h1>Data Lifting</h1>
//       {data.length ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Designation</th>
//               <th>City</th>
//               <th>State</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => {
//               return (
//                     <tr key={item.id}>
//                       <td>{item.id}</td>
//                       <td>{item.name}</td>
//                       <td>{item.dsg}</td>
//                       <td>{item.city}</td>
//                       <td>{item.state}</td>
//                     </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         ""
//       )}
//       <hr />
//       <Child getData={getData}/>
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  let [data, setData] = useState([]);

  function getData(records) {
    setData(records);
  }
  return (
    <>
      <h1>Data Lifitng</h1>
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <hr />
      <Child getData={getData} />
    </>
  );
}
