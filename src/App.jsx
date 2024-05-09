import { Routes, Route} from 'react-router-dom'

import React from 'react';
import Home from './pages/Home.jsx';
import Market from './pages/Market.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import Converter from './pages/Converter.jsx';
import Item from './pages/Item.jsx';



import './App.css'

function App() {
    
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='market' element={<Market/>} />
      <Route path='sign-up' element={<SignUp/>} />
      <Route path='log-in' element={<LogIn/>} />
      <Route path='converter' element={<Converter/> } />
      <Route path='item' element={<Item/>} />
    </Routes>
  )
}

export default App
