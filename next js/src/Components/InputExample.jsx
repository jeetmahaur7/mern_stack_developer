// "use client"
// import React, { useState } from 'react'

// export default function InputExample() {
//     let [message, setMessage] = useState("")
//     let [lowerVowel, setLowerVowel] = useState(0)
//     let [lowerConsonant, setLowerConsonant] = useState(0)
//     let [upperVowel, setUpperVowel] = useState(0)
//     let [upperConsonant, setUpperConsonant] = useState(0)
//     let [digit, setDigit] = useState(0)
//     let [space, setSpace] = useState(0)
//     let [specialCharacter, setSpecialCharacter] = useState(0)
//     let [show, setShow] = useState(false)

//     function postData() {
//         let lv = 0
//         let lc = 0
//         let uv = 0
//         let uc = 0
//         let d = 0
//         let s = 0
//         let sp = 0
//         for (let x of message) {
//             if (x >= 'a' && x <= 'z') {
//                 console.log(x)
//                 if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u")
//                     lv++
//                 else
//                     lc++
//             }
//             else if (x >= 'A' && x <= 'Z') {
//                 if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U")
//                     uv++
//                 else
//                     uc++
//             }
//             else if (x >= '0' && x <= '9')
//                 d++
//             else if (x === ' ')
//                 s++
//             else
//                 sp++
//         }
//         setLowerVowel(lv)
//         setLowerConsonant(lc)
//         setUpperVowel(uv)
//         setUpperConsonant(uc)
//         setDigit(d)
//         setSpace(s)
//         setSpecialCharacter(sp)
//         setShow(true)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1 className='bg-primary text-light text-center p-2 fs-5 mb-3'>Input Example</h1>
//                     <textarea name="message" className='form-control mb-3 ' onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Message' rows={7}></textarea>
//                     <button id='input_button' className='btn btn-primary w-100' onClick={postData}>Submit</button>
//                     {
//                         show ?
//                             <table border={2} cellPadding={10}>
//                                 <tbody>
//                                     <tr>
//                                         <th>Lower Case Vowel</th>
//                                         <td>{lowerVowel}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Lower Case Consonant</th>
//                                         <td>{lowerConsonant}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Upper Case Vowel</th>
//                                         <td>{upperVowel}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Upper Case Consonant</th>
//                                         <td>{upperConsonant}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Digit</th>
//                                         <td>{digit}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Space</th>
//                                         <td>{space}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Special Character</th>
//                                         <td>{specialCharacter}</td>
//                                     </tr>
//                                 </tbody>
//                             </table> : null
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// "use client"
// import React, { useState } from 'react'

// export default function InputExample() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: 0,
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
//                 Name            :   ${data.name}
//                 Email           :   ${data.email}
//                 Phone           :   ${data.phone}
//                 Designation     :   ${data.designation}
//                 Salary          :   ${data.salary}
//                 City            :   ${data.city}
//                 State           :   ${data.state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Input Example</h1>
//                     <h3>Name        : {data.name}</h3>
//                     <h3>Email       : {data.email}</h3>
//                     <h3>Phone       : {data.phone}</h3>
//                     <h3>Designation : {data.designation}</h3>
//                     <h3>Salary      : {data.salary}</h3>
//                     <h3>City        : {data.city}</h3>
//                     <h3>State       : {data.state}</h3>
//                     <form onSubmit={postData}>
//                         <input type="text" required name="name" onChange={getInputData} placeholder='Full Name' />
//                         <input type="email" required name="email" onChange={getInputData} placeholder='Email Address' />
//                         <input type="text" required name="phone" onChange={getInputData} placeholder='Phone Number' />
//                         <input type="text" required name="designation" onChange={getInputData} placeholder='Designation' />
//                         <input type="number" required name="salary" onChange={getInputData} placeholder='Salary' />
//                         <input type="text" required name="city" onChange={getInputData} placeholder='City Name' />
//                         <input type="text" required name="state" onChange={getInputData} placeholder='State Name' />
//                         <button type='submit' id='input_button'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// "use client"
// import React, { useState } from "react";

// export default function InputExample() {
//   let [data, setData] = useState({
//     name: "",
//     email: "",
//     course: "",
//     city: "",
//     state: "",
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

//   function postData(e) {
//     e.preventDefault();
//     alert(`
//       Name   : ${data.name}
//       Email  : ${data.email}
//       Course : ${data.course}
//       City   : ${data.city}
//       State  : ${data.state}
//       `);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Input Example</h1>
//           <h3>Name    : {data.name}</h3>
//           <h3>Email   : {data.email}</h3>
//           <h3>Course  : {data.course}</h3>
//           <h3>City    : {data.city}</h3>
//           <h3>State   : {data.state}</h3>
//           <form onSubmit={postData}>
//             <input
//               type="text"
//               name="name"
//               onChange={getInputData}
//               placeholder="Full Name"
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={getInputData}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="course"
//               onChange={getInputData}
//               placeholder="Course Name"
//             />
//             <input
//               type="text"
//               name="city"
//               onChange={getInputData}
//               placeholder="City Name"
//             />
//             <input
//               type="text"
//               name="state"
//               onChange={getInputData}
//               placeholder="State Name"
//             />
//             <button type="submit" id="input_button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     fee: 0,
//     city: "",
//     state: "",
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

//   function postData(e) {
//     e.preventDefault();
//     alert(`data.
//     Name      : ${data.name}
//     Email     : ${data.email}
//     Phone     : ${data.phone}
//     Course    : ${data.course}
//     fee       : ${data.fee}
//     city      : ${data.city}
//     state     : ${data.state}
//     `);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Form Component</h1>
//           <h3>Name   : {data.name}</h3>
//           <h3>Email  : {data.email}</h3>
//           <h3>Phone  : {data.phone}</h3>
//           <h3>Course : {data.course}</h3>
//           <h3>Fee    : {data.fee}</h3>
//           <h3>City   : {data.city}</h3>
//           <h3>State  : {data.state}</h3>
//           <form onSubmit={postData}>
//             <input
//               type="text"
//               name="name"
//               onChange={getInputData}
//               placeholder="Full Name"
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={getInputData}
//               placeholder="Email Address"
//             />
//             <input
//               type="text"
//               name="phone"
//               onChange={getInputData}
//               placeholder="Phone Number"
//             />
//             <input
//               type="text"
//               name="course"
//               onChange={getInputData}
//               placeholder="Course Name"
//             />
//             <input
//               type="number"
//               name="fee"
//               onChange={getInputData}
//               placeholder="Fee Structre"
//             />
//             <input
//               type="text"
//               name="city"
//               onChange={getInputData}
//               placeholder="City Name"
//             />
//             <input
//               type="text"
//               name="state"
//               onChange={getInputData}
//               placeholder="State Name"
//             />
//             <button type="submit" id="input_button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")
//     let [phone, setPhone] = useState("")
//     let [designation, setDesignation] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")

//     function postData(e) {
//         e.preventDefault()
//         alert(`
//                 Name            :   ${name}
//                 Email           :   ${email}
//                 Phone           :   ${phone}
//                 Designation     :   ${designation}
//                 Salary          :   ${salary}
//                 City            :   ${city}
//                 State           :   ${state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Input Example</h1>
//                     <h3>Name        : {name}</h3>
//                     <h3>Email       : {email}</h3>
//                     <h3>Phone       : {phone}</h3>
//                     <h3>Designation : {designation}</h3>
//                     <h3>Salary      : {salary}</h3>
//                     <h3>City        : {city}</h3>
//                     <h3>State       : {state}</h3>
//                     <form onSubmit={postData}>
//                         <input type="text" required name="name" onChange={getInputData} placeholder='Full Name' />
//                         <input type="email" required name="email" onChange={getInputData}  placeholder='Email Address' />
//                         <input type="text" required name="phone" onChange={getInputData}  placeholder='Phone Number' />
//                         <input type="text" required name="designation" onChange={getInputData} alue)} placeholder='Designation' />
//                         <input type="number" required name="salary" onChange={getInputData} } placeholder='Salary' />
//                         <input type="text" required name="city" onChange={getInputData} placeholder='City Name' />
//                         <input type="text" required name="state" onChange={getInputData}  placeholder='State Name' />
//                         <button type='submit' id='input_button'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [phone, setPhone] = useState("");
//   let [designation, setDesignation] = useState("");
//   let [salary, setSalary] = useState("");
//   let [city, setCity] = useState("");
//   let [state, setState] = useState("");

//   function postData(e) {
//     e.preventDefault();
//     alert(`
//         Name         : ${name}
//         Email        : ${email}
//         Phone        : ${phone}
//         Designation  : ${designation}
//         Salary       : ${salary}
//         City         : ${city}
//         State        : ${city}
//         `);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Input Example</h1>
//           <h3>Name : {name}</h3>
//           <h3>Email : {email}</h3>
//           <h3>Phone : {phone}</h3>
//           <h3>Designation : {designation}</h3>
//           <h3>Salary : {salary}</h3>
//           <h3>City : {city}</h3>
//           <h3>State : {state}</h3>
//           <form onSubmit={postData}>
//             <input
//               type="text"
//               name="name"
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               name="phone"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <input
//               type="text"
//               name="designation"
//               onChange={(e) => setDesignation(e.target.value)}
//             />
//             <input
//               type="number"
//               name="salary"
//               onChange={(e) => setSalary(e.target.value)}
//             />
//             <input
//               type="text"
//               name="city"
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <input
//               type="text"
//               name="state"
//               onChange={(e) => setState(e.target.value)}
//             />
//             <button type="submit" id="input_button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [course, setCourse] = useState("");
//   let [city, setCity] = useState("");
//   let [state, setState] = useState("");

//   function postData(e) {
//     e.preventDefault();
//     alert(`
//       Name   : ${name}
//       Email  : ${email}
//       Course : ${course}
//       City   : ${city}
//       State  : ${state}
//       `)
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Input Example</h1>
//           <h3>Name   : {name}</h3>
//           <h3>Email  : {email}</h3>
//           <h3>Course : {course}</h3>
//           <h3>City   : {city}</h3>
//           <h3>State  : {state}</h3>
//           <form onSubmit={postData}>
//             <input
//               type="text"
//               name="name"
//               onChange={() => setName(e.target.value)}
//             />
//             <input
//               type="email"
//               name="email"
//               onChange={() => setEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               name="course"
//               onChange={() => setCourse(e.target.value)}
//             />
//             <input
//               type="text"
//               name="city"
//               onChange={() => setCity(e.target.value)}
//             />
//             <input
//               type="text"
//               name="state"
//               onChange={() => setState(e.target.value)}
//             />
//             <button type="submit" id="input_button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [phone, setPhone] = useState("");
//   let [designation, setDesignation] = useState("");
//   let [salary, setSalary] = useState("");
//   let [city, setCity] = useState("");
//   let [state, setState] = useState("");

//   function postData(e) {
//     e.preventDefault();
//     alert(`
//         Name        :  ${name}
//         Email       :  ${name}
//         Phone       :  ${phone}
//         Designation :  ${designation}
//         Salary      :  ${salary}
//         City        :  ${city}
//         State       :  ${state}
//         `);
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Form Exaple</h1>
//           <h4>Name : {name}</h4>
//           <h4>Email : {email}</h4>
//           <h4>Phone : {phone}</h4>
//           <h4>Designantion : {designation}</h4>
//           <h4>Salary : {salary}</h4>
//           <h4>City : {city}</h4>
//           <h4>State : {state}</h4>
//           <form onSubmit={postData}>
//             <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Full Name"/>
//             <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
//             <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
//             <input type="text" name="designation" onChange={(e)=>setDesignation(e.target.value)} placeholder="Designation"/>
//             <input type="number" name="salary" onChange={(e)=>setSalary(e.target.value)} placeholder="Salary"/>
//             <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} placeholder="City Name"/>
//             <input type="text" name="state" onChange={(e)=>setState(e.target.value)} placeholder="State Name"/>
//             <button type="submit" id="input_button">Submit</button>
//         </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Input Example</h1>
//                     <h3>Name : {name}</h3>
//                     <input type="text" required name="name" onChange={getInputData} placeholder='Full Name' />
//                     <button onClick={() => alert(`Hello ${name}`)} id='input_button'>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [name, setName] = useState("");
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Input Example</h1>
//           <h3>Name : {name}</h3>
//           <input
//             type="text"
//             required
//             name="name"
//             onChange={(e) => setName(e.target.value)}
//             placeholder='"Full Name'
//           />
//           <button onClick={() => alret(`Hello ${name}`)} id="input_button">
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function InputExample() {
//   let [name, setName] = useState("");
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Input Example</h1>
//           <h3>Name :{name}</h3>
//           <input
//             type="text"
//             name="name"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full Name"
//           />
//           <button
//             onClick={() => setName(alert(`Hello ${name}`))}
//             id="input_button"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
