// src/App.js
import React, { useState } from 'react';
import './App.css';
import User from './components/User';
import State from './components/State'
import {Route,BrowserRouter as Router,Switch}from 'react-router-dom';
import Home from'./pages/Home'
import Blog from './pages/Blog';
import Products from './pages/Products';
import About from './pages/About';

function App(){

  return(
    <div className='App'>
    <>
    <User name='Krenare' lastname='Kryeziu'/>
    <User name='Krenare' lastname='Kryeziu'/>
    <User name='Krenare' lastname='Kryeziu'/>
    <User name='Krenare' lastname='Kryeziu'/>

    </>
    </div>
  )
}


function App(){
  return(
<Router>
<Nav/>
<Route exact path='/' component={Home}/>
<Route path='/Blog' component={Blog}/>
<Route path='/Products' component={Products}/>
<Route path='/About' component={About}/>

</Router>
  )}
  


export default App;
