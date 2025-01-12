"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function APICalling() {
    let [data, setData] = useState([])
    async function getAPIData() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        response = await response.json()
        setData(response)
    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{Object.values(item.address).map((item, index) => {
                            return <span key={index}>{typeof item === "object" ? Object.values(item) : `${item},`}</span>
                        })}</td>
                        <td>{item.phone}</td>
                        <td><Link href={`https://www.${item.website}`} target='_blank' className='btn btn-primary'>Website</Link></td>
                        <td>{Object.values(item.company).join(",")}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

// import Link from 'next/link'
// import React from 'react'

// export default function APICalling({ data }) {
//     return (
//         <div>
//             <table className='table table-bordered'>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>User Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Phone</th>
//                         <th>Website</th>
//                         <th>Company</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => {
//                         return <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.username}</td>
//                             <td>{item.email}</td>
//                             <td>{Object.values(item.address).map((item, index) => {
//                                 return <span key={index}>{typeof item === "object" ? Object.values(item) : `${item},`}</span>
//                             })}</td>
//                             <td>{item.phone}</td>
//                             <td><Link href={`https://www.${item.website}`} target='_blank' className='btn btn-primary'>Website</Link></td>
//                             <td>{Object.values(item.company).join(",")}</td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }