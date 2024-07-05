import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    let {name,dsg,salary} = useParams()
    return (
        <>
            <h1>This is Profile Page</h1>
            {name?<h1>Name : {name}</h1>:""}
            {dsg?<h1>Designation : {dsg}</h1>:""}
            {salary?<h1>Salary : {salary}</h1>:""}
        </>
    )
}
