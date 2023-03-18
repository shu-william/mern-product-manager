import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form className="col-md-6 mx-auto" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Product Title:</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" step=".01" name="price" id="price" onChange={(e) => setPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="form-control" />
                </div>
                <input type="submit" value="Add Product" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default ProductForm
