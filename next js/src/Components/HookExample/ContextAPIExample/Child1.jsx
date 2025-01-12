// import React, { useContext } from 'react'
// import Child2 from './Child2'

// import { NumberContext } from './Parent'
// export default function Child1() {
//     let { state, dispatch } = useContext(NumberContext)
//     return (
//         <>
//             <h2>This is Child1 Component</h2>
//             <h3>num1 = {state.num1} | num2 = {state.num2}</h3>
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment num1</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement num1</button>
//             <br />
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment num2</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement num2</button>
//             <hr />
//             <Child2 />
//         </>
//     )
// }

import React, { useContext } from "react";
import { NumberContext } from "./Parent";
import Child2 from "./Child2";

export default function Child1() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child1 Component</h2>
      <h3>Num1 : {state.num1} | Num2 : {state.num2}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment Num1</button>
      <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement Num1</button>
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment Num2</button>
      <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement Num2</button>
      <hr />
      <Child2 />
    </>
  );
}

// import React from 'react'
// import Child2 from './Child2'

// export default function Child1() {
//     return (
//         <>
//             <h2>This is Child1 Component</h2>
//             <hr />
//             <Child2/>
//         </>
//     )
// }

// import React from 'react'
// import Child2 from './Child2'

// export default function Child1() {
//   return (
//     <>
//      <h2>This is Child1 Component</h2>
//      <hr />
//      <Child2 />
//     </>
//   )
// }

// import React from "react";
// import Child2 from "./Child2";

// export default function Child1() {
//   return (
//     <>
//       <h1>This is Child1 Component</h1>
//       <hr />
//       <Child2 />
//     </>
//   );
// }
