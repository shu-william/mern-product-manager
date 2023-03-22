import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {

    const [products, setProducts] = useState([]);

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <DisplayAll products={products} setProducts={setProducts} />
    </div>
  )
}

export default Main
