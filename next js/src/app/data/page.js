import APICalling from '@/Components/APICalling'
import React from 'react'

export default async function page() {
    return (
        <APICalling />
    )
}



// import APICalling from '@/Components/APICalling'
// import React from 'react'

// async function getAPIData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     response = await response.json()
//     return response
// }
// export default async function page() {
//     let data = await getAPIData()
//     return (
//         <APICalling data={data}/>
//     )
// }
