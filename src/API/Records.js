import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Records() {

    const [records, setRecords] = useState()
    const [showCreateForm, setCreateForm] = useState(false)
    const [newrecords, setNewRecords] = useState({ postId: 1, id: '', name: '', email: '', body: '' })
    const [singleRecord, setSingleRecord] = useState()
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3001/comments")
            .then((response) => setRecords(response.data))
            .catch((error) => console.log(error))
    }, [])

    const createRecord = () => {
        axios.post("http://localhost:3001/comments", newrecords)
            .then((response) => {
                alert('Record added')
                // setCreateForm(false)
            })
            .catch((error) => console.log(error))
    }

    const editRecordsDetails = (singleRecord) => {
        console.log(singleRecord)
        setSingleRecord(singleRecord)
        setShowEditForm(true)
    }

    const updateRecord = () => {
        axios.put(`http://localhost:3001/comments/${singleRecord.id}`, newrecords)
            .then((response) => {
                alert('Record Updated')
                setShowEditForm(false)
            })
            .catch((error) => console.log(error))
    }

    const deleteRecords = (id) => {
        console.log(id)
        let ask = window.confirm('you want to delete?')
        console.log(ask)
        if (ask) {
            axios.delete(`http://localhost:3001/comments/${id}`)
                .then((response) => {
                    alert('Record Deleted')
                    setShowEditForm(false)
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div>
            <h2>CRUD Operation Performed</h2>

            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => setCreateForm(true)} className="btn btn-success">Add Record</button>
                </div>
            </div>

            {/* Form for adding post */}
            <div className='container'>
                <div className='row'>
                    <div className='mt-4'>
                        {
                            showCreateForm || showEditForm ?
                                <>
                                    <div className="container row border mt-4">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            defaultValue={singleRecord?.name}
                                            onChange={(event) => setNewRecords({ ...newrecords, name: event.target.value })}
                                        />
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            defaultValue={singleRecord?.email}
                                            onChange={(event) => setNewRecords({ ...newrecords, email: event.target.value })}
                                        />
                                        <label>Body</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            defaultValue={singleRecord?.body}
                                            onChange={(event) => setNewRecords({ ...newrecords, body: event.target.value })}
                                        />
                                        {
                                            showEditForm ?
                                                <button className='btn btn-lg btn-success' onClick={updateRecord}>Update-Record</button> :
                                                <button className='btn btn-lg btn-success' onClick={createRecord}>Create-Record</button>
                                        }
                                    </div>
                                </> : null
                        }
                    </div>
                </div>
            </div>

            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr key="">
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records ? records.map((r) => (
                            <tr>
                                <td>{r.id}</td>
                                <td>{r.name}</td>
                                <td>{r.email}</td>
                                <td>{r.body}</td>
                                <td> <button onClick={() => editRecordsDetails(r)} className="btn btn-warning">Edit</button></td>
                                <td> <button onClick={() => deleteRecords(r.id)} className="btn btn-danger">Delete</button></td>

                            </tr>
                        )) :
                            <tr>Loading.....</tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
