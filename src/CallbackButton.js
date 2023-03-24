import React from 'react'
import propTypes from 'prop-types'

export default function CallbackButton(props) {
    let { theme, text, size } = props;
    return (
        <div>
            <button className={`btn btn-${size} btn-${theme}`} onClick={props.callback}>
                {text}
            </button>

        </div>
    )
}

//Default values to props

CallbackButton.defaultProps = {
    theme: 'info',
    text: 'Default',
    size: 'lg'
}

// Set Typecheck for PROPS
CallbackButton.propTypes = {
    theme: propTypes.string,
    text: propTypes.string,
    size: propTypes.string,
    callback: propTypes.func
}
