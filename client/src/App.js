import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => console.log(res.data.products))
      .catch(err => console.log(err))
  }, [])  

  return (
    <div className="App">
      <ProductForm />
    </div>
  );
}

export default App;
