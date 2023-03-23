import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DisplayOne = (props) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="my-4">
            <p>Product Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/edit/${product._id}`} className="mx-3">Edit</Link>
            <Link onClick={(e) => {deleteProduct(product._id)}}>Delete</Link>
        </div>
    )
}

export default DisplayOne
