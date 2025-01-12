"use client"
import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    let [count, setCount] = useState(1)

    useEffect(() => {
        var time = setInterval(() => {
            console.log(count)
            if (count == 30) {
                alert("Session Timeout")
                setCount(1)
            }
            else {
                setCount(count + 1)
            }
        }, 1000)
        return () => clearInterval(time)
    })
    useEffect(() => {
        setCount(1)
    }, [num1, num2])
    return (
        <>
            <div className="main">
                <div className="center">
                    <h1 className='bg-primary text-center p-2 text-light'>useEffect Example</h1>
                    <h2 className={`${count > 25 ? "bg-danger" : "bg-primary"} text-light text-center p-2`}>num1 ={num1} | num2={num2}</h2>
                    <div className="btn-group">
                        <button className='btn btn-primary' onClick={() => setNum1(num1 + 1)}>Increment num1</button>
                        <button className='btn btn-primary' onClick={() => setNum2(num2 + 1)}>Increment num2</button>
                    </div>
                </div>
            </div>
        </>
    )
}


// "use client"
// import React, { useEffect, useState } from 'react'

// export default function UseEffectExample() {
//     let [num1, setNum1] = useState(1)
//     let [num2, setNum2] = useState(1)

//     useEffect(() => {
//         console.log("useEffect without dependency is called")
//     })  //execute callback function every time when state or props change

//     useEffect(() => {
//         console.log("useEffect with empty dependency array is called")
//     }, [])//execute callback function only one time, not dependent  on state or props change

//     useEffect(() => {
//         console.log("useEffect with dependency is called")
//     }, [num2])//execute callback function only if num2 is changed

//     return (
//         <>
//             <h1>useEffect Example</h1>
//             <h2>num1 ={num1} | num2={num2}</h2>
//             <button onClick={() => setNum1(num1 + 1)}>Increment num1</button>
//             <button onClick={() => setNum2(num2 + 1)}>Increment num2</button>
//         </>
//     )
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function UseEffectExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);

//   useEffect(() => {
//     console.log("Use Effect Without Dependency");
//   });

//   useEffect(() => {
//     console.log("Use Effect With Dependency");
//   },[]);

//   useEffect(() => {
//     console.log("Use Effect Dependency is called");
//   },[num2]);
//   return (
//     <>
//       <h1>Use Effect Example</h1>
//       <h2>
//         Num1 : {num1} | Num2 : {num2}
//       </h2>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function UseEffectExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);

//   useEffect(() => {
//     console.log("Without dependency");
//   });

//   useEffect(() => {
//     console.log("With array without dependency");
//   }, []);

//   useEffect(() => {
//     console.log("With array, with dependency");
//   }, [num2]);

//   return (
//     <>
//       <h1>UseEffect Example</h1>
//       <h3>
//         Num1 : {num1} | Num2 : {num2}
//       </h3>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function UseEffectExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);

//   useEffect(() => {
//     console.log("UseEffect without depedency is called");
//   });

//   useEffect(()=>{
//     console.log("Useeffect with empty array dependdency")
//   },[])

//   useEffect(()=>{
//     console.log("Useeffect with dependency called")
//   },[num2])

//   return (
//     <>
//       <h1>UseEffect Example</h1>
//       <h2>
//         Num1 ={num1} | Num2 ={num2}
//       </h2>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function UseEffectExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);

//   useEffect(() => {
//     console.log("Use Effect without dependency");
//   });

//   useEffect(() => {
//     console.log("Use Effect with dependency");
//   }, []);

//   useEffect(() => {
//     console.log("Use Effect with dependency");
//   }, [num2]);

//   return (
//     <>
//       <h1>UseEffect Example</h1>
//       <h2>
//         Num1 : {num1} | Num2 : {num2}
//       </h2>
//       <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//       <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//     </>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function UseEffectExample() {
//   let [num1, setNum1] = useState(1);
//   let [num2, setNum2] = useState(1);

//   useEffect(()=>{
//     console.log("useEffect without dependency")
//   })

// useEffect(()=>{
//     console.log("useEffect without array")
// })

// useEffect(()=>{
//     console.log("useEffect with Array")
// },[num2])

//   return (
//     <>
//       <h1>UseEffect Example</h1>
//       <h2>Num1 : {num1} | Num2 : {num2}</h2>
//       <button onClick={()=>setNum1(num1+1)}>Increment Num1</button>
//       <button onClick={()=>setNum2(num2+1)}>Increment Num2</button>
//     </>
//   );
// }
