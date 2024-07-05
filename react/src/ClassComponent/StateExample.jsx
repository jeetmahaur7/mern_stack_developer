//With State
import React, { Component } from "react";

export default class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
  }

  render() {
    return (
      <>
        <h1>Class Component state example</h1>
        <h2>num={this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +
        </button>
        <button
          onClick={() =>
            this.state.num > 1
              ? this.setState({ num: this.state.num - 1 })
              : " "
          }
        >
          -
        </button>
      </>
    );
  }
}

// import React, { Component } from 'react'
// export default class StateExample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 1
//         }
//     }
//     render() {
//         console.log("Component is Rendered")
//         return (
//             <>
//                 <h1>Class Component State Example</h1>
//                 <h2>num = {this.state.num}</h2>
//                 <button onClick={() => this.state.num > 1 ? this.setState({ num: this.state.num - 1 }) : ""}>Decrement</button>
//                 <button onClick={() => this.setState({ num: this.state.num + 1 })}>Increment</button>
//             </>
//         )
//     }
// }
// import React, { Component } from "react";

// export default class StateExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       num: 1,
//     };
//   }

//   increment() {
//     this.setState({ num: this.state.num + 1 });
//   }

//   decrement() {
//     if(this.state.num>1)
//     this.setState({ num: this.state.num - 1 });
//   }

//   render() {
//     return (
//       <>
//         <h1>Class Component State Example</h1>
//         <h3>{this.state.num}</h3>
//         <button onClick={() => this.increment()}>+</button>
//         <button onClick={() => this.decrement()}>-</button>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react'

// export default class StateExample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 1
//         }
//     }
//     decrement() {
//         if (this.state.num > 1)
//             this.setState({ num: this.state.num - 1 })
//     }
//     increment() {
//         this.setState({ num: this.state.num + 1 })
//     }
//     render() {
//         console.log("Component is Rendered")
//         return (
//             <>
//                 <h1>Class Component State Example</h1>
//                 <h2>num = {this.state.num}</h2>
//                 <button onClick={() => this.decrement()}>Decrement</button>
//                 <button onClick={() => this.increment()}>Increment</button>
//             </>
//         )
//     }
// }

//Without State
// import React, { Component } from 'react'

// export default class StateExample extends Component {
//     constructor() {
//         super()
//         this.num = 1
//     }
//     decrement() {
//         this.num--
//         console.log(this.num)
//     }
//     increment() {
//         this.num++
//         console.log(this.num)
//     }
//     render() {
//         console.log("Component is Rendered")
//         return (
//             <>
//                 <h1>Class Component State Example</h1>
//                 <h2>num = {this.num}</h2>
//                 <button onClick={() => this.decrement()}>Decrement</button>
//                 <button onClick={() => this.increment()}>Increment</button>
//             </>
//         )
//     }
// }
