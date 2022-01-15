import './App.css';
import React from 'react'; 
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Header from './components/header/header';
import Home from './pages/home/home';

function App() {
  return (
    <div>  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
