import React, { useState } from "react";

export default function InputExampleF() {
  let [data, setData] = useState({
    name: "",
    dsg: "",
    phone: "",
    city: "",
  });

  function getInput(e) {
    let { name, value } = e.target;

    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();
    alert(`
    Name        : ${data.name}
    Designation : ${data.dsg}
    Phone       : ${data.phone}
    City        : ${data.city}
    `);
  }

  return (
    <>
      <div className="main">
        <div className="center">
          <h1>Function Component Input Example</h1>
          <h3>Name: {data.name}</h3>
          <h3>Designation: {data.dsg}</h3>
          <h3>Phone: {data.phone}</h3>
          <h3>City: {data.city}</h3>

          <form onSubmit={postData}>
            <input
              type="text"
              required
              name="name"
              onChange={getInput}
              placeholder="Full Name"
            />
            <input
              type="text"
              required
              name="dsg"
              onChange={getInput}
              placeholder="Designation"
            />
            <input
              type="text"
              required
              name="phone"
              onChange={getInput}
              placeholder="Phone"
            />
            <input
              type="text"
              required
              name="city"
              onChange={getInput}
              placeholder="City"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from 'react'

// export default function InputExampleF() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: "",
//         city: "",
//         state: ""
//     })
//     function getInputData(e) {
//         let { name, value } = e.target
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: value
//             }
//         })
//     }
//     function postData(e) {
//         e.preventDefault()
//         alert(`
//                 Name         :   ${data.name}
//                 Email        :   ${data.email}
//                 Phone        :   ${data.phone}
//                 Designation  :   ${data.designation}
//                 Salary       :   ${data.salary}
//                 City         :   ${data.city}
//                 State        :   ${data.state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {data.name}</h3>
//                     <h3>Email : {data.email}</h3>
//                     <h3>Phone : {data.phone}</h3>
//                     <h3>Designation : {data.designation}</h3>
//                     <h3>Salary : {data.salary}</h3>
//                     <h3>City : {data.city}</h3>
//                     <h3>State : {data.state}</h3>
//                     <form onSubmit={postData}>
//                         <input type="text" required name="name" onChange={getInputData} placeholder='Full Name' />
//                         <input type="email" required name="email" onChange={getInputData} placeholder='Email Address' />
//                         <input type="text" required name="phone" onChange={getInputData} placeholder='Phone Number' />
//                         <input type="text" required name="designation" onChange={getInputData} placeholder='Designation' />
//                         <input type="number" required name="salary" onChange={getInputData} placeholder='Salary' />
//                         <input type="text" required name="city" onChange={getInputData} placeholder='City Name' />
//                         <input type="text" required name="state" onChange={getInputData} placeholder='State Name' />
//                         <button type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React, { useState } from "react";

// export default function InputExampleF() {
//   let [data, setData] = useState({
//     name: "",
//     dsg: "",
//     salary: "",
//     city: "",
//   });

//   function getInputData(e) {
//     let { name, value } = e.target;
//     setData((old) => {
//       return {
//         ...old,
//         [name]: value,
//       };
//     });
//   }

//   function postData() {
//     alert(`
//       Name        : ${data.name}
//       Designation : ${data.dsg}
//       Salary      : ${data.salary}
//       City        : ${data.city}
//       `);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Function Component Input Example</h1>
//           <h3>Name: {data.name}</h3>
//           <h3>Designation: {data.dsg}</h3>
//           <h3>Salary: {data.salary}</h3>
//           <h3>City: {data.city}</h3>

//           <input
//             type="text"
//             name="name"
//             onChange={getInputData}
//             placeholder="Full Name"
//           />
//           <input
//             type="text"
//             name="designation"
//             onChange={getInputData}
//             placeholder="Designation"
//           />
//           <input
//             type="text"
//             name="salary"
//             onChange={getInputData}
//             placeholder="Salary"
//           />
//           <input
//             type="text"
//             name="city"
//             onChange={getInputData}
//             placeholder="City"
//           />
//           <button onClick={postData}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react'

// export default function InputExampleF() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: "",
//         city: "",
//         state: ""
//     })
//     function getInputData(e) {
//         let { name, value } = e.target
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: value
//             }
//         })
//     }
//     function postData() {
//         alert(`
//                 Name         :   ${data.name}
//                 Email        :   ${data.email}
//                 Phone        :   ${data.phone}
//                 Designation  :   ${data.designation}
//                 Salary       :   ${data.salary}
//                 City         :   ${data.city}
//                 State        :   ${data.state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {data.name}</h3>
//                     <h3>Email : {data.email}</h3>
//                     <h3>Phone : {data.phone}</h3>
//                     <h3>Designation : {data.designation}</h3>
//                     <h3>Salary : {data.salary}</h3>
//                     <h3>City : {data.city}</h3>
//                     <h3>State : {data.state}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
//                     <input type="email" name="email" onChange={getInputData} placeholder='Email Address' />
//                     <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' />
//                     <input type="text" name="designation" onChange={getInputData} placeholder='Designation' />
//                     <input type="number" name="salary" onChange={getInputData} placeholder='Salary' />
//                     <input type="text" name="city" onChange={getInputData} placeholder='City Name' />
//                     <input type="text" name="state" onChange={getInputData} placeholder='State Name' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React, { useState } from "react";

// export default function InputExampleF() {
//   let [name, setName] = useState("");

//   function getInputData(e) {
//     setName(e.target.value);
//   }

//   function postData() {
//     alert(`Hello ${name}`);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Function Component Input Example</h1>
//           <h3>Name: {name}</h3>
//           <input
//             type="text"
//             name="name"
//             onChange={getInputData}
//             placeholder="Full Name"
//           />
//           <button onClick={postData}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";

// export default function InputExampleF() {
//   let [name, setName] = useState("");

//   function getInputData(e) {
//     setName(e.target.value);
//   }

//   function postData() {
//     alert("Hello " + name);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Function Component Input Example</h1>
//           <h3>Name: {name}</h3>
//           <input type="text" name="name" onChange={getInputData} />
//           <button onClick={postData}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react'

// export default function InputExampleF() {
//     let [name, setName] = useState("")
//     function getInputData(e) {
//         setName(e.target.value)
//     }
//     function postData() {
//         alert("Hello " + name)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {name}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }
