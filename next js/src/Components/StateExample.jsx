// "use client"
// import React, { useState } from 'react'

// export default function StateExample() {
//     let [num, setNum] = useState(1)
//     return (
//         <>
//             <h1>State Example</h1>
//             <h2>num = {num}</h2>
//             <button onClick={() => num > 1 ? setNum(num - 1) : ""}>Decrement</button>
//             <button onClick={() => setNum(num + 1)}>Increment</button>
//         </>
//     )
// }

// "use client";
// import React, { useState } from "react";

// export default function StateExample() {
//   let [num, setNum] = useState(1);
//   return (
//     <>
//       <h1>State Example</h1>
//       <h2>Num :{num}</h2>
//       <button onClick={() => (num > 1 ? setNum(num - 1) : "")}>
//         Decrement
//       </button>
//       <button onClick={() => setNum(num + 1)}>Increment</button>
//     </>
//   );
// }

// "use client"
// import React, { useState } from 'react'

// export default function StateExample() {
//     let [num, setNum] = useState(1)
//     function decrement() {
//         if (num > 1)
//             setNum(num - 1)
//     }
//     function increment() {
//         setNum(num + 1)
//     }
//     return (
//         <>
//             <h1>State Example</h1>
//             <h2>num = {num}</h2>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={increment}>Increment</button>
//         </>
//     )
// }

// "use client"
// import React, { useState } from "react";

// export default function StateExample() {
//   let [num, setNum] = useState(1);
//   function decrement() {
//     if (num > 1) setNum(num - 1);
//   }

//   function increment() {
//     setNum(num + 1);
//   }
//   return (
//     <>
//       <h1>State Example</h1>
//       <h2>Num : {num}</h2>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={increment}>Decrement</button>
//     </>
//   );
// }
