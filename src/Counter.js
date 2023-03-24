import React, { useState } from 'react'

export default function Counter() {

    const [count, setcount] = useState(0)
    const [name, setName] = useState('mukhtar')

    const incrementCounter = () => {
        setcount(count + 1)
    }

    const incrementFive = () => {
        setcount(count + 5)
    }

    const ChangeName = () => {
        setName('ansari')
    }

    return (
        <div>
            <hr />
            Count: {count}
            <hr />
            <button onClick={incrementCounter}>INC-COUNTER</button>
            <hr />
            <button onClick={incrementFive}>INC by 5</button>
            <hr />
            <button onClick={ChangeName}>{name}</button>
        </div>
    )
}
