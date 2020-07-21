import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Docs from './Pages/Docs/Docs';
import docs from './doc.json'

import './App.css';

function App() {
  return (
    
    <Switch>
      <Route exact path='/' render={ props => <Home {...props} /> } />
      <Route path='/about' render={ props => <About {...props} /> } />
      <Route path='/docs' render={ props => <Docs  docs={docs} {...props} /> } />
    </Switch>
  );
}

export default App;
