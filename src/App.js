import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import OpengraphReactComponent from 'opengraph-react';
import Project from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

console.log(process.env.REACT_APP_OPENGRAPH_API_KEY);
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={'/'}>
            <Navbar></Navbar>
            <About></About>
          </Route>
          <Route path="/projects" exact component={'/projects'}>
            <Navbar></Navbar>
            <Project></Project>
          </Route>
          <Route path="/contact" exact component={'/contact'}>
            <Navbar></Navbar>
            <Contact></Contact>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
