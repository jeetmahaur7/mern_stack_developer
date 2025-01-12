// "use client"
// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// export default function Parent() {
//     let [num1, setNum1] = useState(1)
//     let [num2, setNum2] = useState(1)

//     console.log("Parent Component is Rendered")
//     return (
//         <>
//             <h1>UseCallback Example</h1>
//             <h2>This is Parent Component</h2>
//             <h3>num1 = {num1} | num2 = {num2}</h3>
//             <button onClick={() => setNum1(num1 + 1)}>Increment num1</button>
//             <button onClick={() => setNum2(num2 + 1)}>Increment num2</button>
//             <br />
//             {/* without useCallback */}
//             {/* <Child/> */}

//             {/* with useCallback */}
//             {useCallback(<Child num1={num1} num2={num2}/>, [num2])}
//         </>
//     )
// }

// "use client";
// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// export default function Parent() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   return (
//     <>
//       <h1>UseCallback Example</h1>
//       <h2>This is Parent Component</h2>
//       <h3>
//         Num1 ={num1} | Num2 ={num2}
//       </h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//       {/* <Child/> */}
//       <br />
//       {useCallback(<Child num1={num1} num2={num2} />, [num2])}
//     </>
//   );
// }

// "use client"
// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// export default function Parent() {
//     let[num1,setNum1]=useState(1)
//     let[num2,setNum2]=useState(1)

//   return (
//     <>
//     <h1>Use Call Back Example</h1>
//      <h2>This is Parent Example</h2>
//      <h3>Num1 = {num1} | Num2 = {num2}</h3>
//      <button onClick={()=>setNum1(num1+1)}>Increment Num1</button>
//      <button onClick={()=>setNum2(num2+1)}>Increment Num2</button>
//     {useCallback(<Child num1={num1} num2={num2}/>,[num2])}
//     </>
//   )
// }

// "use client";
// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// export default function Parent() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   return (
//     <>
//       <h1>Use Call Back Example</h1>
//       <h2>This is Parent Example</h2>
//       <h3>
//         Num1 : {num1} | Num2 : {num2}
//       </h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//       {useCallback(<Child num1={num1} num2={num2} />, [num2])}
//     </>
//   );
// }

// "use client"
// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// export default function Parent() {
//     let[num1,setNum1]=useState(1)
//     let[num2,setNum2]=useState(1)
//   return (
//     <>
//      <h1>Use Call Back Example</h1>
//      <h2>This is Parent Component</h2>
//      <h3>Num1 : {num1} | Num2 : {num2}</h3>
//      <button onClick={()=>setNum1(num1+1)}>Increment Num1</button>
//      <button onClick={()=>setNum2(num2+1)}>Increment Num2</button>
//      {useCallback(<Child num1={num1} num2={num2}/>,[num2])} 
//     </>
//   )
// }
