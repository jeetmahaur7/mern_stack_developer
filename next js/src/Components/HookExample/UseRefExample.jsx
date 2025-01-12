// "use client"
// import React, { useRef, useState } from 'react'

// export default function UseRefExample() {
//     let [name, setName] = useState("")
//     let email = useRef("")

//     console.log("Component is Rendered")
//     function postData() {
//         alert(`
//                 Name  : ${name}
//                 Email : ${email.current}
//             `)
//     }
//     return (
//         <>
//             <h1>useRef Example</h1>
//             <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name' />
//             <input type="text" name="email" onChange={(e) => email.current = e.target.value} placeholder='Email Address' />
//             <button onClick={postData}>Submit</button>
//         </>
//     )
// }

// "use client"
// import React, { useRef, useState } from "react";

// export default function UseRefExample() {
//   let [name, setName] = useState("");
//   let email = useRef("");

//   function postData() {
//     alert(`
//       Name  : ${name}
//       Email : ${email.current}
//       `);
//   }
//   return (
//     <>
//       <h1>UseRef Example</h1>
//       <input
//         type="text"
//         name="name"
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter Full Name"
//       />
//       <input
//         type="text"
//         name="email"
//         onChange={(e) => (email.current = e.target.value)}
//         placeholder="Email Address"
//       />
//       <button onClick={postData}>Submit</button>
//     </>
//   );
// }