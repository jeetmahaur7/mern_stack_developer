import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            dsg: "",
            salary: "",
            emp: "",
            show: false
        }
    }
    getData = (data) => {
        this.setState({
            name: data.name ?? "N/A",
            dsg: data.dsg ?? "N/A",
            salary: data.salary ?? "N/A",
            emp: data.emp ?? [],
            show: true
        })
    }
    render() {
        return (
            <>
                <h1>Class Component Example to Send Data from Child to Parent Component</h1>
                <h2>This is Parent Component</h2>
                {
                    this.state.show ?
                        <>
                            <h3>Name : {this.state.name}</h3>
                            <h3>Designation : {this.state.dsg}</h3>
                            <h3>Salary : {this.state.salary}</h3>

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
                                        this.state.emp.map((item, index) => {
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
                <Child getData={this.getData} />
            </>
        )
    }
}
