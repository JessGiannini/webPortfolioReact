import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';



function App() {
  return (
   <div>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
