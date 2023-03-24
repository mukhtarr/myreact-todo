import React from 'react'

export default function EmployeeList(props) {
    const sayHello = (name) => {
        alert(`Hi ${name}`)
    }

    return (
        <div>
            {
                props.dataa.map((emp, index) => (
                    <>
                        <li key={index}>
                            {emp.id}, {emp.name}, {emp.age}
                        </li>
                        {/* <button onClick={sayHello}>Print Name</button> */}
                        <button onClick={() => sayHello(emp.name)}>Print Name</button>
                    </>
                ))
            }

        </div>
    )
}
