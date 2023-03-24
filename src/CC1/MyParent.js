import React, { useState } from 'react'
import Display from './Display'
import Login from './Login'

export default function MyParent() {
    const [userInfo, updateUserInfo] = useState({})
    return (
        <div>
            <Login updateUserInfo={updateUserInfo} />
            <hr />
            <Display userInfo={userInfo} />

        </div>
    )
}
