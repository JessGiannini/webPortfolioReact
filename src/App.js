import './App.css';
import Navbar from './components/Navbar';
import AboutMe from "./components/pages/AboutMe";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';



function App() {
  return (
   <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/aboutme" component={AboutMe} />
          <Route path='/' exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
