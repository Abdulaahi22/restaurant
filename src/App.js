//import here everybage you add
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from '../src/pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import css navbar 
import '../src/styles/Navbar.css'; // Import CSS for Navbar
import '../src/styles/Footer.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path='/' element={<Home />} /> {/* Use element prop for Route */}
          <Route path='/menu' element={<Menu />} />
          {/* Add more routes as needed */}
          
        </Routes>
        <footer>
          <Footer /> {/* Include Footer component */}
        </footer>
      </Router>
    </div>
  );
}

export default App;