import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Delete from './pages/Delete';
import FindId from './pages/FindId';

function App() {
  return (
    <div className="App">
      <Route exact path = '/findById/:id' component={FindId} />
      <Route exact path = '/delete/:id' component={Delete} />
    </div>
  );
}

export default App;
