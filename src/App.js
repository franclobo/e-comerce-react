import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavScrollExample from './components/Navbar';

function App() {
  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
