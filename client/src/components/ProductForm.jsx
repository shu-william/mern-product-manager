import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");

    const {products, setProducts} = props;

    const formValidator = () => {
        let isValid = true;
        if (title.length < 2) {
            isValid = false;
        }
        if (price <= 0) {
            isValid = false;
        }
        if (description.length < 2) {
            isValid = false;
        }
        return isValid;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors("");
        if (formValidator()) {
            axios.post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
                .then(res => {
                    console.log(res.data);
                    setProducts([...products, res.data]); // 
                })
                .catch(err => console.log(err))
        }
        else {
            setErrors("Title and description must be more than 2 characters. Price must be greater than 0.")
        }
    }

    return (
        <div>
            {errors ? <p className="text-danger">{errors}</p> : ""}
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
                <input type="submit" value="Add Product" className="btn btn-primary my-3" />
            </form>
        </div>
    )
}

export default ProductForm
