// "use client"
// import React, { useMemo, useState } from 'react'

// function calculate(num) {
//     let sum = 0
//     for (let i = 1; i <= 300000000 + num; i++) {
//         sum = sum + i
//     }
//     return sum
// }
// export default function UseMemoHookExample() {
//     let [num1, setNum1] = useState(1)
//     let [num2, setNum2] = useState(1)
//     // let count = calculate(num2)  //without useMemo
//     let count = useMemo(() => calculate(num2), [num2])
//     return (
//         <>
//             <h1>UseMemo Hook Example</h1>
//             <h2>num1 = {num1} | num2 = {num2}</h2>
//             <h3>count = {count}</h3>
//             <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//             <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//         </>
//     )
// }

// "use client";
// import React, { useMemo, useState } from "react";

// function calculate(num) {
//   let sum = 0;
//   for (let i = 1; i <= 4000000000 + num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// export default function UseMemoHookExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   // let count = calculate(num2);
//   let count = useMemo(() => calculate(num2), [num2]);
//   return (
//     <>
//       <h1>
//         Num1 : {num1} | Num2 : {num2}
//       </h1>
//       <h3>Count : {count}</h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useMemo, useState } from "react";

// function calculate(num) {
//   let sum = 0;
//   for (let i = 1; i <= 300000000 + num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// export default function UseMemoHookExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   //   let count = calculate(num2);
//   let count = useMemo(() => calculate(num2),[num2]);
//   return (
//     <>
//       <h1>UseMemo Hook Example</h1>
//       <h1>
//         Num1 : {num1} | Num2 : {num2}
//       </h1>
//       <h3>Count ={count}</h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";

// function calculate(num) {
//   let sum = 0;
//   for (let i = 1; num <= 3000000000 + num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// export default function UseMemoHookExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);
//   let count = calculate(num2);
//   return (
//     <>
//       <h1>Num1 : {num1} | Num2 : {num2}</h1>
//       <h3>Count ={count}</h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num1</button>
//     </>
//   );
// }
