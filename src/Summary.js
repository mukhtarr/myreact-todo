import React from 'react'
import CallbackButton from './CallbackButton'

export default function Summary(props) {

    let { index, name } = props

    return (
        <>
            <td>{index + 1}</td>
            <td>{name}</td>

            {/*  <button className='btn btn-sm btn-success'
            onClick={()=>props.promoteCallback(name)}
            >
            Promote
         </button> */}
            <td>
                <CallbackButton
                    theme='primary'
                    text='Promote'
                    size='sm'
                    callback={() => props.promoteCallback(name)}
                />
            </td>

            <td>
                <CallbackButton
                    theme='success'
                    text='Like'
                    size={45}
                    callback={() => props.promoteCallback(name)}
                />
            </td>

            <td>
                <CallbackButton
                    theme='danger'
                    text='Dislike'
                    size='sm'
                    callback={() => props.promoteCallback(name)}
                />
            </td>

            <td>
                <CallbackButton

                    callback={() => props.promoteCallback(name)}
                />
            </td>

        </>
    )
}
