// "use client"
// import React, { createContext, useReducer } from 'react'
// import Reducer from './Reducer'

// import Child1 from './Child1'

// export const NumberContext = createContext()
// export default function Parent() {
//     let [state, dispatch] = useReducer(Reducer, { num1: 1, num2: 1 })
//     return (
//         <>
//             <h1>Context API Example</h1>
//             <h2>This is Parent Component</h2>
//             <h3>num1 = {state.num1} | num2 = {state.num2}</h3>
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment num1</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement num1</button>
//             <br />
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment num2</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement num2</button>
//             <hr />
//             <NumberContext.Provider value={{ state, dispatch }}>
//                 <Child1 />
//             </NumberContext.Provider>
//         </>
//     )
// }

'use client'
import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import Child1 from "./Child1";

export const NumberContext = createContext();
export default function Parent() {
  let [state, dispatch] = useReducer(Reducer, { num1: 1, num2: 1 });
  return (
    <>
      <h1>Context API Example</h1>
      <h2>This is Parent Component</h2>
      <h3>Num1 : {state.num1} | Num2 : {state.num2}</h3>
      <button onClick={()=>dispatch({type:"INCREMENT_NUM1"})}>Increment Num1</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM1"})}>Decrement Num1</button>
      <br />
      <button onClick={()=>dispatch({type:"INCREMENT_NUM2"})}>Increment Num2</button>
      <button onClick={()=>dispatch({type:"DECREMENT_NUM2"})}>Decrement Num2</button>
      <hr />
      <NumberContext.Provider value={{state,dispatch}}>
        <Child1 />
      </NumberContext.Provider>
    </>
  );
}

// "use client"
// import React, { createContext } from 'react'
// import Child1 from './Child1'

// export const NameContext = createContext()
// export const DesigantionContext = createContext()
// export const SalaryContext = createContext()
// export default function Parent() {
//     return (
//         <>
//             <h2>This is Parent Component</h2>
//             <hr />
//             <NameContext.Provider value="Nitin Chauhan">
//                 <DesigantionContext.Provider value="Trainer">
//                     <SalaryContext.Provider value={9873848046}>
//                         <Child1 />
//                     </SalaryContext.Provider>
//                 </DesigantionContext.Provider>
//             </NameContext.Provider>
//         </>
//     )
// }

// "use client"
// import React, { createContext } from "react";
// import Child1 from "./Child1";

// export const NameContext = createContext();
// export const DesigantionContext = createContext();
// export const SalaryContext = createContext();

// export default function Parent() {
//   return (
//     <>
//       <h2>This is Parent Component</h2>
//       <hr />
//       <NameContext.Provider value="Jeet Mahaur">
//         <DesigantionContext.Provider value="Developer">
//           <SalaryContext.Provider value={150000}>
//             <Child1 />
//           </SalaryContext.Provider>
//         </DesigantionContext.Provider>
//       </NameContext.Provider>
//     </>
//   );
// }

// "use client"
// import React, { createContext} from "react";
// import Child1 from "./Child1";

// export const NameContext = createContext();
// export const CityContext = createContext();
// export const DesigantionContext = createContext();

// export default function Parent() {
//   return (
//     <>
//       <h1>This is Parent Component</h1>
//       <hr />
//       <NameContext.Provider value="Jeet Mahaur">
//         <CityContext.Provider value="Aligarh">
//           <DesigantionContext.Provider value="Full Stack Developer">
//             <Child1 />
//           </DesigantionContext.Provider>
//         </CityContext.Provider>
//       </NameContext.Provider>
//     </>
//   );
// }
