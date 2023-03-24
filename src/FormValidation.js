import React, { useState } from 'react'

export default function FormValidation() {

    const initval = {
        username: "",
        email: "",
        password: ""
    }

    const [formvalues, setFormValues] = useState(initval)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target
        setFormValues({ ...formvalues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formvalues))
        setIsSubmit(true)
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!values.username) {
            errors.username = 'username is required'
        }

        if (!values.email) {
            errors.email = 'email is required'
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not valid email format'
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors
    }

    console.log(formvalues)

    return (
        <div>
            <div className='container'>
                <form className='form-control' onSubmit={handleSubmit}>
                    <h1>User Form</h1>
                    <p>
                        Username :
                        <input type="text"
                            name="username"
                            placeholder='username'
                            value={formvalues.username}
                            onChange={handleChange}
                        />
                    </p>
                    <p>{formErrors.username}</p>
                    <p>
                        Email :
                        <input type="email"
                            name="email"
                            placeholder='email id'
                            value={formvalues.email}
                            onChange={handleChange}
                        />
                    </p>
                    <p>{formErrors.email}</p>
                    <p>
                        Password :
                        <input type="password"
                            name="password"
                            placeholder='password'
                            value={formvalues.password}
                            onChange={handleChange}
                        />
                    </p>
                    <p>{formErrors.password}</p>
                    <button>Submit</button>

                </form>
                {JSON.stringify(formvalues, undefined, 2)}
            </div>

        </div>
    )
}
