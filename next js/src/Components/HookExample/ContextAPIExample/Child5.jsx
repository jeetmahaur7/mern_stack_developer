// import React, { useContext } from 'react'

// import { NumberContext } from './Parent'
// export default function Child5() {
//     let { state, dispatch } = useContext(NumberContext)
//     return (
//         <>
//             <h2>This is Child5 Component</h2>
//             <h3>num1 = {state.num1} | num2 = {state.num2}</h3>
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM1" })}>Increment num1</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM1" })}>Decrement num1</button>
//             <br />
//             <button onClick={() => dispatch({ type: "INCREMENT_NUM2" })}>Increment num2</button>
//             <button onClick={() => dispatch({ type: "DECREMENT_NUM2" })}>Decrement num2</button>
//         </>
//     )
// }

// import React from 'react'

// import { NameContext, DesigantionContext, SalaryContext } from './Parent'
// export default function Child5() {
//     return (
//         <>
//             <h2>This is Child5 Component</h2>
//             {<NameContext.Consumer>
//                 {(value) => {
//                     return <h3>Name : {value}</h3>
//                 }}
//             </NameContext.Consumer>}
//             {<DesigantionContext.Consumer>
//                 {(value) => {
//                     return <h3>Designation : {value}</h3>
//                 }}
//             </DesigantionContext.Consumer>}
//             {<SalaryContext.Consumer>
//                 {(value) => {
//                     return <h3>Salary : {value}</h3>
//                 }}
//             </SalaryContext.Consumer>}
//         </>
//     )
// }

// import React from "react";
// import { DesigantionContext, NameContext, SalaryContext } from "./Parent";

// export default function Child5() {
//   return (
//     <>
//       <h1>This is child5 component</h1>
//       {
//         <NameContext.Consumer>
//           {(value) => {
//             return <h3>Name : {value}</h3>;
//           }}
//         </NameContext.Consumer>
//       }
//       {
//         <SalaryContext.Consumer>
//           {(value) => {
//             return <h3>Salary : {value}</h3>;
//           }}
//         </SalaryContext.Consumer>
//       }
//       {
//         <DesigantionContext.Consumer>
//           {(value) => {
//             return <h3>Designation : {value}</h3>;
//           }}
//         </DesigantionContext.Consumer>
//       }
//     </>
//   );
// }

// import React from "react";
// import { CityContext, DesigantionContext, NameContext } from "./Parent";

// export default function Child5() {
//   return (
//     <>
//       <h1>This is Child5 Component</h1>
//       {
//         <NameContext.Consumer>
//           {(value) => {
//             return <h3>Name : {value}</h3>;
//           }}
//         </NameContext.Consumer>
//       }
//       {
//         <CityContext.Consumer>
//           {(value) => {
//             return <h3>City :{value}</h3>;
//           }}
//         </CityContext.Consumer>
//       }
//       {
//         <DesigantionContext.Consumer>
//           {(value) => {
//             return <h3>Desiganation :{value}</h3>;
//           }}
//         </DesigantionContext.Consumer>
//       }
//     </>
//   );
// }