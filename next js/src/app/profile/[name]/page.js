//Accessing Request Parameters

// client side page
"use client"
import React from 'react'
import { useParams } from 'next/navigation'

export default function page(req, res) {
  let { name } = useParams()
  return (
    <>
      <h1>This is Profile Page</h1>
      <h2>Name : {name}</h2>
    </>
  )
}



// server side page
// import React from 'react'

// export default function page(req, res) {
//   return (
//     <>
//       <h1>This is Profile Page</h1>
//       <h2>Name : {req.params.name}</h2>
//     </>
//   )
// }
