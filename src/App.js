// import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Header from "./components/header/header";
import {data} from './data/data';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/cart';

const App = () => {
const [product, setProduct] = useState(data);
const increment = () => {
  console.log("Increment")
}
const decrement = () => {
  console.log("Decrement")
}




  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home increment={increment} decrement={decrement} data={product}/> }/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
