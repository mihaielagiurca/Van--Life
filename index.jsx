import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


export default function App() {
  return (
    
    <BrowserRouter>
      <nav>
        <div className="left-item">
        <Link to="/Home" className="nav-item">
          <h3 className="nav-item">#VANLIFE</h3>
        </Link> 
        </div>
        <div className="right-item">
          <Link to="/About" className="nav-item">About</Link>
          <Link to="/Van" className="nav-item">Vans</Link>
        </div>
      </nav>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element = {<About/>}/>
      </Routes>
       <div className="footer">
        <p>Ⓒ 2024 #VANLIFE</p>
      </div>
    </BrowserRouter>

  )
}






ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);