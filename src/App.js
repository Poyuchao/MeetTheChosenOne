import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Feature from './components/pages/Features';
import Blog from './components/pages/Blog';
import Premium from './components/pages/Premium';
import Apps from './components/pages/Apps';

function App() {
  return (
    <>
    <Router  basename={process.env.PUBLIC_URL}>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Feature />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/apps' element={<Apps />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
