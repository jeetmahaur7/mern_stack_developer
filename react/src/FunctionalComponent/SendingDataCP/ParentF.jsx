import React, { useState } from 'react'
import ChildF from './ChildF'

export default function ParentF() {
    let [name, setName] = useState("")
    let [dsg, setDsg] = useState("")
    let [salary, setSalary] = useState(0)
    let [emp, setEmp] = useState([])
    let [show, setShow] = useState(false)
    function getData(data) {
        setName(data.name ?? "N/A")
        setDsg(data.dsg ?? "N/A")
        setSalary(data.salary ?? "N/A")
        setEmp(data.emp ?? [])
        setShow(true)
    }
    return (
        <>
            <h1>Functional Component Example to Send Data from Child to Parent Component</h1>
            <h2>This is Parent Component</h2>
            {
                show ?
                    <>
                        <h3>Name : {name}</h3>
                        <h3>Designation : {dsg}</h3>
                        <h3>Salary : {salary}</h3>

                        <table border={2} cellPadding={10}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Salary</th>
                                    <th>City</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    emp.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.dsg}</td>
                                            <td>{item.salary}</td>
                                            <td>{item.city}</td>
                                            <td>{item.state}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </> :
                    ""
            }
            <hr />
            <ChildF getData={getData} />
        </>
    )
}
