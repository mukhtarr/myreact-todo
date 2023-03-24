import React from "react";

export default function Employee(props) {
    const SayHello = (name) => {
        alert(`Hi ${name}`)
    }
  return (
    <div>
      {props.data.map((emp) => (
        <>
          <li>
            {emp.id}, {emp.name}, {emp.age}
              </li>
              <button className="btn btn-danger fs-5" onClick={()=> SayHello(emp.name)} >Print Name</button>
        </>
      ))}
    </div>
  );
}
