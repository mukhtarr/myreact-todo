import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {

    const [posts, setPosts] = useState();
    const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState({ Id: '', useId: '', title: '', body: '' })
    const [showEditForm, setShowEditForm] = useState(false)
    const [singlePost, setSinglePost] = useState()

    useEffect(() => {
        //logic to connect API --- read all records
        axios
            .get("http://localhost:3001/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error));
    }, []);
    //puting an array will stop calling api again and again

    //logic to connect API --- to post records
    const createRecord = () => {
        axios
            .post("http://localhost:3001/posts", newRecord)
            .then((response) => {
                alert('Record Added Successfully')
                setCreateForm(false)
            })
            .catch((error) => console.log(error));
    }

    const editPostDetails = (singlePost) => {
        console.log(singlePost)

        setSinglePost(singlePost)
        setShowEditForm(true)
    }

    const updateRecord = () => {
        axios
            .put(`http://localhost:3001/posts/${singlePost.id}`, newRecord)
            .then((response) => {
                alert('Record Updated Successfully')
                setShowEditForm(false)
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => setCreateForm(true)} className="btn btn-success">Add Post</button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h4 className="bg-secondary text-white text-center">POST LIST</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered text-center text-secondary">
                        <thead>
                            <tr key="">
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts ? posts.map((p, index) => (
                                    <tr key="">
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.body}</td>
                                        <td> <button onClick={() => editPostDetails(p)} className="btn btn-warning">Edit</button></td>
                                    </tr>
                                )) : <tr key=""><td>Loading.....</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Form */}
            <div className="row mt-4">
                <div className="col-md-12">
                    {
                        showCreateForm || showEditForm ?
                            <>
                                <div className="container row border">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={singlePost.title}
                                        onChange={(event) => setNewRecord({ ...newRecord, title: event.target.value })} />

                                    <label>Body</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={singlePost.body}
                                        onChange={(event) => setNewRecord({ ...newRecord, body: event.target.value })} />

                                    {
                                        showEditForm ?
                                            <button onClick={updateRecord} className="btn btn-success mt-4">Update</button> :
                                            <button onClick={createRecord} className="btn btn-success mt-4">Create</button>
                                    }

                                </div>
                            </> : null
                    }
                </div>
            </div>
            <br />
        </>
    );
}
