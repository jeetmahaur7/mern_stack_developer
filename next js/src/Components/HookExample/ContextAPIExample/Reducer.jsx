// export default function Reducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT_NUM1":
//             return { ...state, num1: state.num1 + 1 }

//         case "INCREMENT_NUM2":
//             return { ...state, num2: state.num2 + 1 }

//         case "DECREMENT_NUM1":
//             if (state.num1 > 1)
//                 return { ...state, num1: state.num1 - 1 }
//             else
//                 return state

//         case "DECREMENT_NUM2":
//             if (state.num2 > 1)
//                 return { ...state, num2: state.num2 - 1 }
//             else
//                 return state

//         default:
//             return state
//     }
// }

export default function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_NUM1":
      return { ...state, num1: state.num1 + 1 };
    case "INCREMENT_NUM2":
      return { ...state, num2: state.num2 + 1 };
    case "DECREMENT_NUM1":
      if (state.num1 > 1) return { ...state, num1: state.num1 - 1 };
      else return state;
    case "DECREMENT_NUM2":
      if (state.num2 > 1) return { ...state, num2: state.num2 - 1 };
      else return state;
  }
}
