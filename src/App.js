import './App.css';
import Navbar from './components/Navbar';
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';



function App() {
  return (
   <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route path='/' exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
