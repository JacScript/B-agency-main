// import { Switch, Route} from 'react-router-dom'


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Market from './pages/Market.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import Converter from './pages/Converter.jsx';
import Item from './pages/Item.jsx';



import './App.css'

function App() {

  return (
    
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/market' component={Market} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/log-in' component={LogIn} />
      <Route path='/converter' component={Converter} />
      <Route path='/item' component={Item} />
    </Switch>
  )
}

export default App
