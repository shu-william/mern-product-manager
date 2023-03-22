import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => console.log(res.data.products))
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/products" element={<Main />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
