import React from 'react'
import styles from "../index.module.css"
 import "../index.css"
import "../assets/css/style.css"

import pic from "../assets/images/banner2.jpg"

export default function CssImageExample(){
    return(
        <>
        <div className='main'>
               <div className="center">
                   <h3>Lorem ipsum dolor sit amet</h3>
                   <p className='test'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis fugiat amet similique illum? Eos libero natus itaque alias voluptate! Libero quaerat sunt consequuntur hic voluptatibus, non adipisci alias asperiores corrupti facere? Minus ducimus magni deleniti amet officia fugit eum omnis, quasi, eos assumenda dolorem vitae distinctio eligendi, animi labore.</p>
                   <p className={styles.test}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus dolore quia, optio sapiente sit aspernatur autem, iure cum quod ex amet perferendis, ipsam est hic et! Fugit ratione neque itaque ab totam eos quis ducimus pariatur magni distinctio consequuntur magnam quae sed, tenetur soluta at repudiandae laborum modi quas! Repudiandae repellendus libero rerum animi, deserunt mollitia consequatur culpa fugiat recusandae facilis quam! Neque voluptas at rerum dicta? Aperiam, inventore?</p>
                   <div className="items">                    
                     <img src={require("../assets/images/banner1.jpg")} alt="" />
                       <img src={pic} alt="" />
                       <img src="/images/banner3.jpg" alt="" />
                   </div>
                   <h3>Lorem ipsum dolor sit amet</h3>
                 <p className='test'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi, alias debitis quos quia enim ducimus quae eveniet delectus illo libero voluptas cum aperiam iusto aspernatur rem magnam nobis aliquam quasi magni est? Quam aut cumque architecto doloribus eveniet quis blanditiis minus id aspernatur nobis? Recusandae atque laborum maxime id, reprehenderit in! Praesentium quod quas eveniet, quos sit neque blanditiis vel natus possimus assumenda aspernatur voluptas libero ipsam quaerat dolor expedita beatae necessitatibus reprehenderit quia eaque! Nemo facilis corrupti optio?</p>
               </div>
           </div>
        </>
    )
}
// import React from "react";
// import "../assets/css/style.css"

// export default function CssImageExample() {
//   return (
//     <>
//       <h3>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, alias.
//       </h3>
//       <p className="test">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//         dolores cupiditate ex nostrum, alias nihil quae nobis tempore maiores
//         est, nesciunt sunt quibusdam cumque ea voluptatum, magnam itaque
//         repellat qui.
//       </p>
//     </>
//   );
// }

// import React from "react";

// export default function CssImageExample() {
//   const myStyle = {
//     heading: {
//       backgroundColor: "navy",
//       color: "white",
//       padding: 10,
//       textAlign: "center",
//     },
//     para: {
//       backgroundColor: "beige",
//       color: "black",
//       padding: 10,
//       textAlign: "justify",
//     },
//   };
//   return (
//     <>
//       <h1
//         style={{
//           backgroundColor: "orange",
//           color: "black",
//           padding: 10,
//           textAlign: "center",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
//         consectetur.
//       </h1>
//       <p
//         style={{
//           backgroundColor: "beige",
//           color: "black",
//           padding: 10,
//           textAlign: "justify",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
//         velit placeat. Sint, dolorum, dicta id illo nihil dolores iure
//         reiciendis minus optio at voluptatem?
//       </p>
//       <h3 style={myStyle.heading}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsam!
//       </h3>
//       <p style={myStyle.para}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quo
//         fuga illum veniam nemo laudantium error at magnam, quam qui quisquam
//         eligendi, ab earum placeat quasi a voluptates assumenda omnis.
//       </p>
//     </>
//   );
// }

// import React from "react";

// export default function CssImageExample() {
//   const myStyle = {
//     heading: {
//       backgroundColor: "green",
//       textAlign: "center",
//       padding: 10,
//       color: "white",
//     },
//     para: {
//       backgroundColor: "beige",
//       textAlign: "right",
//       padding: 10,
//       color: "black",
//     },
//     orange:{
//         backgroundColor:"orange",
//     }
//   };
//   return (
//     <>
//       <h1
//         style={{
//           backgroundColor: "blueviolet",
//           padding: 10,
//           color: "White",
//           textAlign: "center",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error?
//       </h1>

//       <p
//         style={{
//           backgroundColor: "whitesmoke",
//           color: "black",
//           padding: 10,
//           textAlign: "justify",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse,
//         fugit voluptatibus mollitia culpa recusandae delectus repudiandae eos,
//         ipsum sunt quis cum numquam possimus amet.
//       </p>
//       <h2 style={myStyle.heading}>Lorem ipsum dolor sit amet.</h2>
//       <p style={myStyle.para}>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
//         ducimus nostrum repellat repudiandae natus expedita inventore earum,
//         officia quam laudantium, aut eos itaque numquam labore fuga velit vitae
//         maiores modi ut voluptate id. Fuga iste, repellat assumenda, placeat
//         nesciunt officia qui, totam ut excepturi beatae nemo in quia obcaecati
//         porro.
//       </p>
//       <p style={{...myStyle.para,...myStyle.orange}}>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
//         ducimus nostrum repellat repudiandae natus expedita inventore earum,
//         officia quam laudantium, aut eos itaque numquam labore fuga velit vitae
//         maiores modi ut voluptate id. Fuga iste, repellat assumenda, placeat
//         nesciunt officia qui, totam ut excepturi beatae nemo in quia obcaecati
//         porro.
//       </p>
//     </>
//   );
// }

// import React from "react";
// import pic1 from '../assets/images/banner1.jpg'
// import pic2 from '../assets/images/banner2.jpg'

// export default function CssImageExample() {

//     return (
//         <>
//         <img src={require("../assets/images/banner1.jpg")} alt="" />
//         <img src={require("../assets/images/banner2.jpg")} alt="" />
//         <img src={pic1} alt="" />
//         <img src={pic2} alt="" />
//         <img src="/images/banner3.jpg" alt="" />
//         </>
//     )
// }

// import React from 'react'
// import styles from "../index.module.css"
//  import "../index.css"
// import "../assets/css/style.css"

// import pic from "../assets/images/banner2.jpg"
// export default function CssImageExample() {
//     return (
//         <>
//             <div className='main'>
//                 <div className="center">
//                     <h3>Lorem ipsum dolor sit amet</h3>
//                     <p className='test'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis fugiat amet similique illum? Eos libero natus itaque alias voluptate! Libero quaerat sunt consequuntur hic voluptatibus, non adipisci alias asperiores corrupti facere? Minus ducimus magni deleniti amet officia fugit eum omnis, quasi, eos assumenda dolorem vitae distinctio eligendi, animi labore.</p>
//                     <p className={styles.test}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus dolore quia, optio sapiente sit aspernatur autem, iure cum quod ex amet perferendis, ipsam est hic et! Fugit ratione neque itaque ab totam eos quis ducimus pariatur magni distinctio consequuntur magnam quae sed, tenetur soluta at repudiandae laborum modi quas! Repudiandae repellendus libero rerum animi, deserunt mollitia consequatur culpa fugiat recusandae facilis quam! Neque voluptas at rerum dicta? Aperiam, inventore?</p>
//                     <div className="items">
//                         <img src={require("../assets/images/banner1.jpg")} alt="" />
//                         <img src={pic} alt="" />
//                         <img src="/images/banner3.jpg" alt="" />
//                     </div>
//                     <h3>Lorem ipsum dolor sit amet</h3>
//                     <p className='test'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi, alias debitis quos quia enim ducimus quae eveniet delectus illo libero voluptas cum aperiam iusto aspernatur rem magnam nobis aliquam quasi magni est? Quam aut cumque architecto doloribus eveniet quis blanditiis minus id aspernatur nobis? Recusandae atque laborum maxime id, reprehenderit in! Praesentium quod quas eveniet, quos sit neque blanditiis vel natus possimus assumenda aspernatur voluptas libero ipsam quaerat dolor expedita beatae necessitatibus reprehenderit quia eaque! Nemo facilis corrupti optio?</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React from 'react'

// import pic from "../assets/images/banner2.jpg"
// const mystyle = {
//     heading: {
//         backgroundColor: "navy",
//         color: "white",
//         textAlign: "center",
//         padding: 10
//     },
//     para: {
//         backgroundColor: "green",
//         color: "white",
//         textAlign: "justify",
//         padding: 10
//     },
//     red: {
//         backgroundColor: "red"
//     }
// }
// export default function CssImageExample() {
//     return (
//         <>
//             <div className='main'>
//                 <div className="center">
//                     <h3 style={{ backgroundColor: "navy", color: "white", padding: 10, textAlign: "center" }}>Lorem ipsum dolor sit amet</h3>
//                     <p style={mystyle.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis fugiat amet similique illum? Eos libero natus itaque alias voluptate! Libero quaerat sunt consequuntur hic voluptatibus, non adipisci alias asperiores corrupti facere? Minus ducimus magni deleniti amet officia fugit eum omnis, quasi, eos assumenda dolorem vitae distinctio eligendi, animi labore.</p>
//                     <p style={{ ...mystyle.para, ...mystyle.red }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus dolore quia, optio sapiente sit aspernatur autem, iure cum quod ex amet perferendis, ipsam est hic et! Fugit ratione neque itaque ab totam eos quis ducimus pariatur magni distinctio consequuntur magnam quae sed, tenetur soluta at repudiandae laborum modi quas! Repudiandae repellendus libero rerum animi, deserunt mollitia consequatur culpa fugiat recusandae facilis quam! Neque voluptas at rerum dicta? Aperiam, inventore?</p>
//                     <div className="items">
//                         <img src={require("../assets/images/banner1.jpg")} alt="Image" />
//                         <img src={pic} alt="Image" />
//                         <img src="/images/banner3.jpg" alt="" />
//                     </div>
//                     <h3 style={mystyle.heading}>Lorem ipsum dolor sit amet</h3>
//                     <p style={{ ...mystyle.para, ...mystyle.red }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi, alias debitis quos quia enim ducimus quae eveniet delectus illo libero voluptas cum aperiam iusto aspernatur rem magnam nobis aliquam quasi magni est? Quam aut cumque architecto doloribus eveniet quis blanditiis minus id aspernatur nobis? Recusandae atque laborum maxime id, reprehenderit in! Praesentium quod quas eveniet, quos sit neque blanditiis vel natus possimus assumenda aspernatur voluptas libero ipsam quaerat dolor expedita beatae necessitatibus reprehenderit quia eaque! Nemo facilis corrupti optio?</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React from 'react'

// import pic from "../assets/images/banner2.jpg"
// export default function CssImageExample() {
//     return (
//         <>
//             <div className='main'>
//                 <div className="center">
//                     {/* when images are in src folder */}
//                     <img src={require("../assets/images/banner1.jpg")} alt="Image" />
//                     <img src={pic} alt="Image" />

//                     {/* when images are in public folder */}
//                     <img src="/images/banner3.jpg" alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }
