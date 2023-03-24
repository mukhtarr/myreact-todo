import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const [name, setName] = useState('_______')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Use Effect Demo');
        if (count > 5) {
            console.log('Target of over 5 reached.');
        } else {
            console.log('Target not reached.');
        }

    }, [])

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className='App container mt-4'>
            {/*  <input type="text" onChange={event => setName(event.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button><br /><br />
            <h1>your name is  <mark>{name}</mark> and you clicked {count} times</h1> */}
            <hr />
            <h1>Count is : {count}</h1>
            <button type="button" onClick={handleClick}>
                Increase
            </button>

        </div>
    )
}
