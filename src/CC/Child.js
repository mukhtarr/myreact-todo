import React from 'react'

export default function Child({ changeName }) {
    return (
        <div>
            <h2>Hi, This is child Component -- lets change the name by clicking this button</h2>
            <button onClick={() => changeName('kumar')}>
                change IT
            </button>
        </div>
    )
}
