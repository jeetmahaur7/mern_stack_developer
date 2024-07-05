import React, { Component } from 'react'

export default class InputExample extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            designation: "",
            salary: 0,
            city: "",
            state: ""
        }
    }
    getInput(e) {
        var { name, value } = e.target
        this.setState(() => {
            return {
                ...this.state,
                [name]: value
            }
        })
    }
    postData(e) {
        e.preventDefault()
        alert(`
                Name             :   ${this.state.name}
                Email            :   ${this.state.email}
                Phone            :   ${this.state.phone}
                Designation      :   ${this.state.designation}
                Salary           :   ${this.state.salary}
                City             :   ${this.state.city}
                State            :   ${this.state.state}
            `)
    }
    render() {
        return (
            <>
                <div className="main">'
                    <div className="center">
                        <h3>Class Component Input Example</h3>
                        <h3>Name : {this.state.name}</h3>
                        <h3>Email : {this.state.email}</h3>
                        <h3>Phone : {this.state.phone}</h3>
                        <h3>Designation : {this.state.designation}</h3>
                        <h3>Salary : {this.state.salary}</h3>
                        <h3>City : {this.state.city}</h3>
                        <h3>State : {this.state.state}</h3>
                        <form onSubmit={(e) => this.postData(e)}>
                            <input type="text" required name="name" onChange={(e) => this.getInput(e)} placeholder='Full Name' />
                            <input type="email" required name="email" onChange={(e) => this.getInput(e)} placeholder='Email Address' />
                            <input type="text" required name="phone" onChange={(e) => this.getInput(e)} placeholder='Phone Number' />
                            <input type="text" required name="designation" onChange={(e) => this.getInput(e)} placeholder='Designation' />
                            <input type="text" required name="salary" onChange={(e) => this.getInput(e)} placeholder='Salary' />
                            <input type="text" required name="city" onChange={(e) => this.getInput(e)} placeholder='City Name' />
                            <input type="text" required name="state" onChange={(e) => this.getInput(e)} placeholder='State Name' />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

// import React, { Component } from 'react'

// export default class InputExample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             name:""
//         }
//     }
//     getInput(e){
//         // console.log(e.target.name,e.target.value)
//         this.setState({name:e.target.value})
//     }
//     postData(){
//         alert("Hello "+this.state.name)
//     }
//     render() {
//         return (
//             <>
//                 <div className="main">'
//                     <div className="center">
//                         <h3>Class Component Input Example</h3>
//                         <h3>Name : {this.state.name}</h3>
//                         <input type="text" name="name" onChange={(e)=>this.getInput(e)} placeholder='Full Name' />
//                         <button onClick={()=>this.postData()}>Submit</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// import React, { Component } from "react";

// export default class InputExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       city: "",
//     };
//   }

  // getInput(e) {
  //   this.setState = ({ name: e.target.value });
  //   var { name, value } = e.target;

  //   this.setState(() => {
  //     return {
  //       ...this.state,
  //       [name]: value,
  //     };
  //   });
  // }

  
//   getInput(e) {
//     this.setState({ name: e.target.value });
//     var { name, value } = e.target;
//     this.setState(() => {
//       return {
//         ...this.state,
//         [name]: value,
//       };
//     });
//   }


//   postData() {
//     alert(`
//       Name   : ${this.state.name},
//       Email  : ${this.state.email}
//       Phone  : ${this.state.phone}
//       City   : ${this.state.city}
//       `
//     );
//   }
//   render() {
//     return (
//       <>
//         <h1>Class Component input example</h1>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Email: {this.state.email}</h3>
//         <h3>Phone: {this.state.phone}</h3>
//         <h3>City: {this.state.city}</h3>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => this.getInput(e)}
//           placeholder="First Name"
//         /><br/>
//         <input
//           type="text"
//           name="email"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Email"
//         /><br/>
//         <input
//           type="text"
//           name="phone"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Phone"
//         /><br/>
//         <input
//           type="text"
//           name="city"
//           onChange={(e) => this.getInput(e)}
//           placeholder="City"
//         /><br/>
//         <button onClick={() => this.postData()}>Submit</button>
//       </>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class InputExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       city: "",
//     };
//   }

//   getInput(e) {
//     this.setState({ name: e.target.value });
//     var { name, value } = e.target;
//     this.setState(() => {
//       return {
//         ...this.state,
//         [name]: value,
//       };
//     });

// if (name === "name")
//         this.setState({ name: value })
//     else if (name === "email")
//         this.setState({ email: value })
//     else if (name === "phone")
//         this.setState({ phone: value })

//     else
//         this.setState({ city: value })
//   }

//   postData() {
//     alert(
//       `Name    : ${this.state.name}
//             Email    :${this.state.email}
//             Phone    :${this.state.phone}
//             City     :${this.state.city}
//             `
//     );
//   }

//   render() {
//     return (
//       <>
//         <h1>Class Component Input Example</h1>
//         <h3>Name :{this.state.name}</h3>
//         <h3>Email :{this.state.email}</h3>
//         <h3>Phone :{this.state.phone}</h3>
//         <h3>City :{this.state.city}</h3>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Full Name"
//         />
//         <br />
//         <input
//           type="text"
//           name="email"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Email"
//         />
//         <br />
//         <input
//           type="text"
//           name="phone"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Phone Number"
//         />
//         <br />
//         <input
//           type="text"
//           name="city"
//           onChange={(e) => this.getInput(e)}
//           placeholder="City"
//         />
//         <br />
//         <button onClick={() => this.postData()}>Submit</button>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react'

// export default class InputExample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//             designation: "",
//             salary: 0,
//             city: "",
//             state: ""
//         }
//     }
//     getInput(e) {
//         // this.setState({ name: e.target.value })
//         var { name, value } = e.target
//         this.setState(() => {
//             return {
//                 ...this.state,
//                 [name]: value
//             }
//         })

//         // if (name === "name")
//         //     this.setState({ name: value })
//         // else if (name === "email")
//         //     this.setState({ email: value })
//         // else if (name === "phone")
//         //     this.setState({ phone: value })
//         // else if (name === "designation")
//         //     this.setState({ designation: value })
//         // else if (name === "salary")
//         //     this.setState({ salary: value })
//         // else if (name === "city")
//         //     this.setState({ city: value })
//         // else
//         //     this.setState({ state: value })
//     }
//     postData() {
//         alert(`
//                 Name             :   ${this.state.name}
//                 Email            :   ${this.state.email}
//                 Phone            :   ${this.state.phone}
//                 Designation      :   ${this.state.designation}
//                 Salary           :   ${this.state.salary}
//                 City             :   ${this.state.city}
//                 State            :   ${this.state.state}
//             `)
//     }
//     render() {
//         return (
//             <>
//                 <div className="main">'
//                     <div className="center">
//                         <h3>Class Component Input Example</h3>
//                         <h3>Name : {this.state.name}</h3>
//                         <h3>Email : {this.state.email}</h3>
//                         <h3>Phone : {this.state.phone}</h3>
//                         <h3>Designation : {this.state.designation}</h3>
//                         <h3>Salary : {this.state.salary}</h3>
//                         <h3>City : {this.state.city}</h3>
//                         <h3>State : {this.state.state}</h3>
//                         <input type="text" name="name" onChange={(e) => this.getInput(e)} placeholder='Full Name' />
//                         <input type="email" name="email" onChange={(e) => this.getInput(e)} placeholder='Email Address' />
//                         <input type="text" name="phone" onChange={(e) => this.getInput(e)} placeholder='Phone Number' />
//                         <input type="text" name="designation" onChange={(e) => this.getInput(e)} placeholder='Designation' />
//                         <input type="text" name="salary" onChange={(e) => this.getInput(e)} placeholder='Salary' />
//                         <input type="text" name="city" onChange={(e) => this.getInput(e)} placeholder='City Name' />
//                         <input type="text" name="state" onChange={(e) => this.getInput(e)} placeholder='State Name' />
//                         <button onClick={() => this.postData()}>Submit</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// import React, { Component } from "react";

// export default class InputExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//     };
//   }

//   getInput(e) {
//     this.setState({ name: e.target.value });
//   }

//   postData() {
//     alert("Hello " + this.state.name);
//   }

//   render() {
//     return (
//       <>
//         <h1>Class Component Input Example</h1>
//         <h3>Name : {this.state.name}</h3>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Full Name"
//         />
//         <button onClick={() => this.postData}>Submit</button>
//       </>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class InputExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: " ",
//     };
//   }

//   getInput(e) {
//     this.setState({name:e.target.value});
//   }

//   postData() {
//     alert("Hello " + this.state.name);
//   }
//   render() {
//     return (
//       <>
//         <h1>Class Component Input Example</h1>
//         <h3>Name: {this.state.name}</h3>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => this.getInput(e)}
//           placeholder="Full Name"
//         />
//         <button onSubmit={() => this.postData()}>Submit</button>
//       </>
//     );
//   }
// }

// // import React, { Component } from 'react'

// // export default class InputExample extends Component {
// //     constructor(){
// //         super()
// //         this.state = {
// //             name:""
// //         }
// //     }
// //     getInput(e){
// //         // console.log(e.target.name,e.target.value)
// //         this.setState({name:e.target.value})
// //     }
// //     postData(){
// //         alert("Hello "+this.state.name)
// //     }
// //     render() {
// //         return (
// //             <>
// //                 <div className="main">'
// //                     <div className="center">
// //                         <h3>Class Component Input Example</h3>
// //                         <h3>Name : {this.state.name}</h3>
// //                         <input type="text" name="name" onChange={(e)=>this.getInput(e)} placeholder='Full Name' />
// //                         <button onClick={()=>this.postData()}>Submit</button>
// //                     </div>
// //                 </div>
// //             </>
// //         )
// //     }
// // }
