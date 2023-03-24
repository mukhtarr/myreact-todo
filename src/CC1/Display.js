import React from 'react'

export default function Display(props) {
    const { username, password } = props.userInfo
    return (
        <div>
            <h2>User Detail Component</h2>
            {username && <h4>My Username is {username}</h4>}
            {password && <h4>My Password is {password}</h4>}

        </div>
    )
}
