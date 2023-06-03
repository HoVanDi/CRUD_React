import React, {Component} from 'react';																
import './App.css';																															
// import AllProduct from './components/AllProduct.js';																
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';												
// import routes from './components/route.js';																
// import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';																
import { Route, Routes } from "react-router-dom";
// import Productlist from './components/Productlist';
import Add from './components/Add';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div>
      {/* <Home></Home> */}
        <Routes>
                <Route exact path='/' element={<Home/>}></Route> 
                <Route path='/Add/:id' element={<Add/>}></Route>
                <Route path='/Add' element={<Add/>}></Route>
        </Routes>
        </div>
    );
  }
 
}														
																
export default App;																