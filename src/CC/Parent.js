import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

    const [name, setname] = useState('mukhtar')
    const changeName = (name) => {
        setname(name)
    }

    return (
        <div>
            <hr />
            <h2>Hi, This is Parent Component </h2>
            <h2>My name is <mark>{name}</mark> </h2>
            <hr />
            <Child changeName={changeName} />
        </div>
    )
}
