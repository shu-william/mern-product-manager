import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div>
        <h2>All Products:</h2>
        {
            products.map((product) => {
                return (
                    <div className="my-2">
                        <Link to={`/products/${product._id}`} key={product._id}>{product.title}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayAll
