import React from 'react'

export default function ChildF(props) {
    function sendData() {
        props.getData({
            name: "Nitin Chauhan",
            dsg: "Tariner",
            salary: 135800,
            emp: [
                { id: 1001, name: "Sumit Sharma", dsg: "Trainer", salary: 135800, city: "Faridabad", state: "Haryana" },
                { id: 1002, name: "Tarun Verma", dsg: "Trainer", salary: 65800, city: "Noida", state: "UP" },
                { id: 1003, name: "Nitesh Tiwari", dsg: "Trainer", salary: 85800, city: "Noida", state: "UP" },
                { id: 1004, name: "Rahul Sharma", dsg: "Manager", salary: 235800, city: "Kapur", state: "UP" },
                { id: 1005, name: "Madhur Sharma", dsg: "Accountant", salary: 150800, city: "Faridabad", state: "Haryana" },
            ]
        })
    }
    return (
        <>
            <h2>This is Child Component</h2>
            <button onClick={sendData}>Click to Send Data to Parent Component</button>
        </>
    )
}
