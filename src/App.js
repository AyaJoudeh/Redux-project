import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Blog from './Pages/Blog';


function App() {


  return (
    <Container fluid className='' >
   
    <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />

              
            </Route>

 
      
 
            
  
  
          </Routes>
    </Router>
  
    </Container>
  );
}

export default App;
