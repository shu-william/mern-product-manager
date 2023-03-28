import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayAll = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data);
            setProducts(res.data.products);
        })
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProducts(products.filter(product => product._id !== id));
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h2>All Products:</h2>
        {
            products.map((product) => {
                return (
                    <div className="my-2" key={product._id}>
                        <Link to={`/products/${product._id}`} className="mx-3">{product.title}</Link>
                        <Link to={`/products/edit/${product._id}`} className="btn btn-sm btn-info mx-3">Edit</Link>
                        <button onClick={(e) => {deleteProduct(product._id)}} className="btn btn-sm btn-danger">Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayAll
