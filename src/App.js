import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header.js'
import Home from './pages/Home.js'
function App() {
  return (
    <div className='bodyapp'>
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
