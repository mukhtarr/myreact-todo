import React, { useState } from 'react'

export default function UseStatewithObject() {

    const [name, setName] = useState({ firstname: '', lastname: '' })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }

    return (
        <div className='container'>
            <form className='form-control' onClick={onSubmit}>
                <p>
                    FirstName : <br />
                    <input
                        type="text"
                        onChange={(event) => setName({ ...name, firstname: event.target.value })}
                    />
                </p>
                <p>
                    LastName : <br />
                    <input
                        type="text"
                        onChange={(event) => setName({ ...name, lastname: event.target.value })}
                    />
                </p>
                <button>Submit</button>
                <h3>{JSON.stringify(name)}</h3>
            </form>

        </div>
    )
}
