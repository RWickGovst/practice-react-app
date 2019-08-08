import React from 'react';
// import logo from './logo.svg';
import './App.css';

// react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//pages for router
// import Delete from './pages/Delete';
import FindId from './pages/FindId';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/find' component={FindId} />
        <Route exact path='/home' component={Home} />
        {/* <Route exact path='/delete/:id' component={Delete} /> */}

      </Router>
    </div>
  );
}

export default App;