import React, { useState } from 'react'

export default function FormDemo() {

    const [info, setInfo] = useState({ firstname: '', lastname: '', mobile: '', age: '' })

    const onSubmit = (event) => {
        event.preventDefault();
        if (info.firstname === '' || info.lastname === '' || info.mobile === '' || info.age === '') {
            alert("please enter data");
        } else {
            alert("data submitted");
            console.log(info);
        }
    }

    return (

        <>
            <div>
                <form className='form-control' onClick={onSubmit}
                >
                    <p>
                        FirstName : <br />
                        <input
                            type="text"
                            onChange={(event) => setInfo({ ...info, firstname: event.target.value })}
                        />
                    </p>
                    <p>
                        LastName : <br />
                        <input
                            type="text"
                            onChange={(event) => setInfo({ ...info, lastname: event.target.value })}
                        />
                    </p>
                    <p>
                        Mobile : <br />
                        <input
                            type="number"
                            onChange={(event) => setInfo({ ...info, mobile: event.target.value })}
                        />
                    </p>
                    <p>
                        Age : <br />
                        <input
                            type="number"
                            onChange={(event) => setInfo({ ...info, age: event.target.value })}
                        />
                    </p>
                    <p>
                        <input type="submit" value='Submit' />
                    </p>
                </form>
            </div>

        </>


    )
}
