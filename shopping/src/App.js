// import React, { useEffect } from 'react';
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// components
import "./App.css"
import Navbar from './components/Navbar';
import Products from './components/Products';
import Searchbar from './components/Searchbar';
import SingleProduct from './components/SingleProduct';
import Footer from "./components/Footer";

// bootstrap
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';




function App() {
  return <div className="App">
    <Navbar />
    <Products />
    <Searchbar />
    <SingleProduct />
    <Footer />
    </div>;
}

export default App;










// function App() {
//   return (
//     <>
//       <div className="app">
//         HAPPY SHOPPING
//       </div>
//     </>
//   );
// }

// export default App;
