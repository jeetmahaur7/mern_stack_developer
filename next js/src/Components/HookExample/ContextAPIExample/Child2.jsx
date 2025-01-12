// import React, { useContext } from 'react'
// import Child3 from './Child3'

// import { NumberContext } from './Parent'
// export default function Child2() {
//     let { state, dispatch } = useContext(NumberContext)
//     return (
//         <>
//             <h2>This is Child2 Component</h2>
//             <h3>num1 = {state.num1} | num2 = {state.num2}</h3>
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment num1</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement num1</button>
//             <br />
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment num2</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement num2</button>
//             <hr />
//             <Child3 />
//         </>
//     )
// }

import React, { useContext } from "react";
import { NumberContext } from "./Parent";
import Child3 from "./Child3";

export default function Child2() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is child2 component</h2>
      <h3>Num1 : {state.num1} | Num2 : {state.num2}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment Num1</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM1"})}>Decrement Num1</button>
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment Num2</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM2"})}>Decrement Num2</button>
      <hr />
      <Child3 />
    </>
  );
}

// import React from 'react'
// import Child3 from './Child3'

// export default function Child2() {
//     return (
//         <>
//             <h2>This is Child2 Component</h2>
//             <hr />
//             <Child3/>
//         </>
//     )
// }

// import React from 'react'
// import Child3 from './Child3'

// export default function Child2() {
//   return (
//     <>
//      <h1>This is Child2 Component</h1>
//      <Child3 />
//     </>
//   )
// }

// import React from "react";
// import Child3 from "./Child3";

// export default function Child2() {
//   return (
//     <>
//       <h1>This is Child2 Component</h1>
//       <hr />
//       <Child3 />
//     </>
//   );
// }
