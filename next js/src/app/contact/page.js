// Accessing Query Parameters
// client side page 
"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
  let searchParams = useSearchParams()
  let name = searchParams.get("name")
  let email = searchParams.get("email")
  let phone = searchParams.get("phone")
  return (
    <>
      <h1>This is Contact Page</h1>
      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <h2>Phone : {phone}</h2>
    </>
  )
}



// server side page
// import React from 'react'

// export default function page(req, res) {
//   console.log(req)
//   let { name, email, phone } = req.searchParams
//   return (
//     <>
//       <h1>This is Contact Page</h1>
//       <h2>Name : {name}</h2>
//       <h2>Email : {email}</h2>
//       <h2>Phone : {phone}</h2>
//     </>
//   )
// }
