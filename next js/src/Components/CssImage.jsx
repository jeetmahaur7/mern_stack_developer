// "use client"
// import React from 'react'

// import pic from "../assets/img/banner1.jpg"
// // import "../assets/css/mycss.css"

// const styles = {
//   para:{
//     backgroundColor:"green",
//     color:"white",
//     padding:10,
//     textAlign:"justify",
//     margin:"10px 0"
//   },
//   black:{
//     backgroundColor:"black"
//   }
// }
// export default function CssImage() {
//   return (
//     <>
//       <div className='main'>
//         <div className="center">
//           <div className="first">
//             <img src={pic.src} alt="No Image" />
//             <img src="/images/banner2.jpg" alt="No Image" />
//             <img src="/images/banner3.jpg" alt="No Image" />
//           </div>
//           <div className="second">
//             <h2 style={{backgroundColor:"navy",color:"white",padding:10,textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam!</h2>
//             <p style={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, alias. Facilis officiis nisi explicabo doloribus eum in rem veritatis perspiciatis doloremque ullam totam quidem labore culpa, consequatur nihil similique id atque quas ipsa corrupti fuga porro magni! Repellendus quos quidem tempore atque laboriosam delectus velit, at debitis error iure facilis similique fugiat repudiandae, assumenda voluptatibus quia sit dolorum. Amet nisi, at aperiam perspiciatis dignissimos ducimus. Sequi reprehenderit unde, ipsa laudantium maiores molestiae tenetur, porro numquam laborum, consequatur dolores velit adipisci mollitia quo consectetur? Veritatis debitis iure ratione magnam tempora laborum recusandae at dolorum neque, pariatur explicabo modi, nisi autem adipisci.</p>
//             <p style={{...styles.para,...styles.black}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque distinctio, autem et modi ut veritatis in cum earum maiores. Aut temporibus, saepe reiciendis, optio at minima autem inventore tempore est itaque rem quod, placeat delectus nulla. Explicabo iure, excepturi repellendus ea voluptate id reiciendis placeat expedita dignissimos, atque consectetur obcaecati, enim voluptates doloremque corporis in ipsum. Quae facilis rem iste fuga nesciunt, consequatur sint ratione nihil ea harum deserunt. Eligendi adipisci eaque illum, dolores harum laboriosam esse. Nulla, ut quod.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// "use client";
// import React from "react";
// import pic from "../assets/img/banner1.jpg";
// import "../assets/css/mycss.css";

// const styles = {
//   para: {
//     backgroundColor: "black",
//     color: "white",
//     textAlign: "justify",
//     margin: "10px 0",
//   },
// };
// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src={pic.src} alt="no images" />
//             <img src="/images/banner2.jpg" alt="no images" />
//             <img src="/images/banner3.jpg" alt="no images" />
//           </div>
//           <div className="second">
//             <h1 style={{backgroundColor:"blue", color:"white",textAlign:"center", padding:10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, provident.</h1>
//           <p style={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel obcaecati doloremque ullam autem quasi et, eaque voluptates odio dolor nesciunt quidem animi asperiores sed vero optio debitis provident commodi quaerat molestiae velit possimus officia. Saepe expedita recusandae maiores earum?</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import React from "react";
// import "../assets/css/mycss.css";
// import pic from "../assets/img/banner1.jpg";

// const styles={
//   para:{
//     backgroundColor:"green",
//     color:"white",
//     textAlign:"justify",
//     margin:"10px 0",
//   },
// black:{
//   backgroundColor:"black"
// }
// }

// export default function CssImage() {
//   return (
//     <>
//       <div className="ceneter">
//         <div className="main">
//           <div className="first">
//             <img src={pic.src} alt="No Images" />
//             <img src="/images/banner2.jpg" alt="No Images" />
//             <img src="/images/banner3.jpg" alt="No Images" />
//           </div>
//           <div className="second">
//             <h1 style={{backgroundColor:"navy", color:"white", padding:10, textAlign:"center"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vero!</h1>
//           <p style={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum asperiores quidem fugit vitae sunt, atque reprehenderit provident in minus?</p>
//           <p style={{...styles.para,...styles.black}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum asperiores quidem fugit vitae sunt, atque reprehenderit provident in minus?</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import pic from "../assets/img/banner1.jpg"


export default function CssImage() {

  const styles={
    para:{
      backgroundColor:"green",
      color:"white",
    },
    black:{
      backgroundColor:"black"
    }
  }
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="first">
            <img src={pic.src} alt="No Images" />
            <img src="/images/banner2.jpg" alt="No Images" />
            <img src="/images/banner3.jpg" alt="No Images" />
          </div>
          <div className="second">
            <h1 style={{backgroundColor:"navy",color:"white",padding:10,textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vero!</h1>
         <p style={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia laudantium, deleniti minus mollitia error debitis assumenda iusto adipisci excepturi!</p>
         <p style={{...styles.para,...styles.black}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia laudantium, deleniti minus mollitia error debitis assumenda iusto adipisci excepturi!</p>

          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react'

// import pic from "./img/banner1.jpg"
// export default function CssImage() {
//   return (
//     <>
//       <div className='main'>
//         <div className="center">
//           <div className="first">
//             <img src="/images/banner2.jpg" alt="No Image" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// import React from "react";

// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src="/images/banner2.jpg" alt="No Images" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import pic from "../assets/img/banner1.jpg"

// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src={pic.src} alt="No Images" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React from "react";
// import pic from "../assets/img/banner1.jpg";

// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src={pic.src} alt="No Images" />
//             <img src="/images/banner2.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React from "react";

// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src="/images/banner1.jpg" alt="No Images" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React from "react";

// export default function CssImage() {
//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <div className="first">
//             <img src="/images/banner2.jpg" alt="No Images" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client"
// import React from 'react'

// import pic from "./img/banner1.jpg"
// export default function CssImage() {
//   return (
//     <>
//       <div className='main'>
//         <div className="center">
//           <div className="first">
//             <img src={pic.src} alt="No Image" />
//             <img src="/images/banner2.jpg" alt="No Image" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
