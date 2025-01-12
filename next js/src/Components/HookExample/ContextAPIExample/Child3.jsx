// import React, { useContext } from 'react'
// import Child4 from './Child4'

// import { NumberContext } from './Parent'
// export default function Child3() {
//     let { state, dispatch } = useContext(NumberContext)
//     return (
//         <>
//             <h2>This is Child3 Component</h2>
//             <h3>num1 = {state.num1} | num2 = {state.num2}</h3>
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment num1</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement num1</button>
//             <br />
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment num2</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement num2</button>
//             <hr />
//             <Child4 />
//         </>
//     )
// }

import React, { useContext } from 'react'
import { NumberContext } from './Parent'
import Child4 from './Child4'

export default function Child3() {
  let{state,dispatch}=useContext(NumberContext)
    return (
    <>
      <h2>This is Child3 Component</h2>
      <h3>Num1 : {state.num1} | Num2 : {state.num2}</h3>
      <button onClick={()=>dispatch({type:"INCREMENT_NUM1"})}>Increment Num1</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM1"})}>Decrement Num1</button>
      <br />
      <button onClick={()=>dispatch({type:"INCREMENT_NUM2"})}>Increment Num2</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM2"})}>Decrement Num2</button>
      <hr />
      <Child4 />
    </>
  )
}


// import React, { useContext } from 'react'
// import Child4 from './Child4'

// import { NameContext, DesigantionContext, SalaryContext } from './Parent'
// export default function Child3() {
//     let name = useContext(NameContext)
//     let dsg = useContext(DesigantionContext)
//     let salary = useContext(SalaryContext)
//     return (
//         <>
//             <h2>This is Child3 Component</h2>
//             <h3>Name : {name}</h3>
//             <h3>Designation : {dsg}</h3>
//             <h3>Salary : {salary}</h3>
//             <hr />
//             <Child4 />
//         </>
//     )
// }

// import React, { useContext } from "react";
// import { DesigantionContext, NameContext, SalaryContext } from "./Parent";
// import Child4 from "./Child4";

// export default function Child3() {
//   let name = useContext(NameContext);
//   let dsg = useContext(DesigantionContext);
//   let salary = useContext(SalaryContext);
//   return (
//     <>
//       <h1>This is child3 Component</h1>
//       <h3>Name :{name}</h3>
//       <h3>Desgnation:{dsg}</h3>
//       <h3>Salary :{salary}</h3>
//       <hr />
//       <Child4 />
//     </>
//   );
// }

// import React, { useContext } from "react";
// import Child4 from "./Child4";
// import { CityContext, DesigantionContext, NameContext } from "./Parent";

// export default function Child3() {
//   let name = useContext(NameContext);
//   let dsg = useContext(DesigantionContext);
//   let city = useContext(CityContext);
//   return (
//     <>
//       <h1>This is Child3 Component</h1>
//       <h3>Name : {name}</h3>
//       <h3>Designation :{dsg}</h3>
//       <h3>City :{city}</h3>
//       <hr />
//       <Child4 />
//     </>
//   );
// }
