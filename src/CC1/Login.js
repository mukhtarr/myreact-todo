import React, { useState } from 'react'

export default function Login(props) {

    const [username, updateusername] = useState('')
    const [password, updatepassword] = useState('')

    const onTextChange = (event) => {
        switch (event.target.id) {
            case 'username':
                updateusername(event.target.value)
                break;
            case 'password':
                updatepassword(event.target.value)
                break;
            default:
        }
    }

    const onLoginclick = (event) => {
        event.preventDefault()
        console.log(username, password)
        props.updateUserInfo({ username, password })
    }

    return (
        <div>
            <h2>Login Component</h2>
            <form onSubmit={onLoginclick}>
                <label>UserName :</label>
                <input
                    className='form-control'
                    id='username'
                    type="text"
                    value={username}
                    onChange={onTextChange}
                />
                <label>Password :</label>
                <input
                    className='form-control'
                    id='password'
                    type="password"
                    value={password}
                    onChange={onTextChange}
                />
                <button>Login</button>

            </form>
        </div>
    )
}
