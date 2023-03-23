import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateOne = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

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

    const updateProduct = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.patch("http://localhost:8000/api/products/" + id, {
                title,
                price,
                description
            })
            .then(res => {
                console.log(res);
                navigate("/products");
            })
            .catch(err => console.log(err))
        }
        else {
            setErrors("Title and description must be more than 2 characters. Price must be greater than 0.")
        }
    }

    return (
        <div className='my-3'>
            <h2>Update {title}</h2>
            {errors ? <p className="text-danger">{errors}</p> : ""}
            <form className="col-md-6 mx-auto" onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="title">Product Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" step=".01" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                </div>
                <input type="submit" value="Add Product" className="btn btn-primary my-3" />
            </form>
        </div>
    )
}

export default UpdateOne
