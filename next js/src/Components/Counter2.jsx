// "use client"
// import React, { useState } from 'react'

// const styles = {
//     green: {
//         backgroundColor: "green",
//         color: "white"
//     },
//     red: {
//         backgroundColor: "red",
//         color: "white"
//     },
//     navy: {
//         backgroundColor: "navy",
//         color: "white"
//     },
//     orange: {
//         backgroundColor: "orange",
//         color: "white"
//     },
//     purple: {
//         backgroundColor: "purple",
//         color: "white"
//     },
//     yellow: {
//         backgroundColor: "yellow",
//         color: "black"
//     },
//     black: {
//         backgroundColor: "black",
//         color: "white"
//     },
// }
// export default function Counter2() {
//     let [num1, setNum1] = useState(0)
//     let [num2, setNum2] = useState(0)
//     let [num3, setNum3] = useState(0)

//     function increment() {
//         setNum1(num1 + 1)
//         if (num1 == 0)
//             return

//         if ((num1 + 1) % 10 === 0)
//             setNum2(num2 + 1)

//         if ((num1 + 1) % 30 === 0)
//             setNum3(num3 + 1)
//     }
//     function isPrime(num) {
//         let flag = false
//         for (let i = 2; i <= num ** 0.5; i++) {
//             if (num % i == 0) {
//                 flag = true
//                 break
//             }
//         }
//         return flag === false && num >= 2 ? true : false
//     }
//     function color(counter, num) {
//         if (isPrime(num))
//             return { ...styles.black }
//         else if (counter === "num1") {
//             if (num !== 0 && num % 10 == 0)
//                 return { ...styles.red }
//             else
//                 return { ...styles.green }
//         }
//         else if (counter === "num2") {
//             if (num !== 0 && num % 10 == 0)
//                 return { ...styles.orange }
//             else
//                 return { ...styles.navy }
//         }
//         else {
//             if (num !== 0 && num % 10 == 0)
//                 return { ...styles.yellow }
//             else
//                 return { ...styles.purple }
//         }
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Counter Example</h1>
//                     <h2 style={color("num1", num1)}>num1 = {num1}</h2>
//                     <h2 style={color("num2", num2)}>num2 = {num2}</h2>
//                     <h2 style={color("num3", num3)}>num3 = {num3}</h2>
//                     <button onClick={increment}>+</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// "use client";
// import React, { useState } from "react";

// const styles = {
//   green: {
//     backgroundColor: "green",
//     color: "white",
//   },
//   red: {
//     backgroundColor: "red",
//     color: "white",
//   },
//   navy: {
//     backgroundColor: "navy",
//     color: "white",
//   },
//   orange: {
//     backgroundColor: "orange",
//     color: "white",
//   },
//   purple: {
//     backgroundColor: "purple",
//     color: "white",
//   },
//   yellow: {
//     backgroundColor: "yellow",
//     color: "white",
//   },
//   black: {
//     backgroundColor: "black",
//     color: "white",
//   },
// };

// export default function Counter2() {
//   let [num1, setNum1] = useState(0);
//   let [num2, setNum2] = useState(0);
//   let [num3, setNum3] = useState(0);

//   function increment() {
//     setNum1(num1 + 1);
//     if (num1 == 0) {
//       return;
//     }
//     if ((num1 + 1) % 10 == 0) {
//       setNum2(num2 + 1);
//     }
//     if ((num1 + 1) % 30 == 0) {
//       setNum3(num3 + 1);
//     }
//   }

//   function isPrime(num) {
//     let flag = false;
//     for (let i = 2; i <= num ** 0.5; i++) {
//       if (num % i == 0) {
//         flag = true;
//         break;
//       }
//     }
//     return flag == false && num >= 2 ? true : false;
//   }

//   function color(counter, num) {
//             if (isPrime(num))
//                 return { ...styles.black }
//             else if (counter === "num1") {
//                 if (num !== 0 && num % 10 == 0)
//                     return { ...styles.red }
//                 else
//                     return { ...styles.green }
//             }
//             else if (counter === "num2") {
//                 if (num !== 0 && num % 10 == 0)
//                     return { ...styles.orange }
//                 else
//                     return { ...styles.navy }
//             }
//             else {
//                 if (num !== 0 && num % 10 == 0)
//                     return { ...styles.yellow }
//                 else
//                     return { ...styles.purple }
//             }
//         }

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <h1>Counter example</h1>
//           <h2 style={color("num1", num1)}>Num1 :{num1}</h2>
//           <h2 style={color("num2", num2)}>Num2 :{num2}</h2>
//           <h2 style={color("num3", num3)}>Num3 :{num3}</h2>
//           <button onClick={increment}>+</button>
//         </div>
//       </div>
//     </>
//   );
// }