import React from 'react'

export var name2 = "Satyam Dixit"
export var arr2 = [100,200,300,400,500,600,700,800,900,1000]
export var emp2 = {
    id:1002,
    name:"Deepak Singh Gusain",
    dsg:"Trainer",
    salary:85700,
    city:"Ghaziabad",
    state:"UP"
}
export function display2(){
    return <h3>In display2() of ModulExampleF Component</h3>
}
export default function ModuleExampleF(){
    return(
        <>
            <h1>Functional Component Module Example</h1>
        </>
    )
}

// import React from 'react'

// var name2 = "Satyam Dixit"
// var arr2 = [100,200,300,400,500,600,700,800,900,1000]
// var emp2 = {
//     id:1002,
//     name:"Deepak Singh Gusain",
//     dsg:"Trainer",
//     salary:85700,
//     city:"Ghaziabad",
//     state:"UP"
// }
// function display2(){
//     return <h3>In display2() of ModulExampleF Component</h3>
// }
// function ModuleExampleF(){
//     return(
//         <>
//             <h1>Functional Component Module Example</h1>
//         </>
//     )
// }
// export default ModuleExampleF
// export {name2,arr2,emp2,display2}