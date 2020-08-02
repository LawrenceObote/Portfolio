import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Parallax } from 'react-parallax';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={'/'}>
                        <About></About>
                        <Parallax
                            blur={0}
                            bgImage={'/assets/RedLightBulb.jpg'}
                            bgImageAlt="Red Light Bulb"
                            strength={500}>
                            <div style={{ height: '100vh', width: '600px' }}></div></Parallax>
                        <Projects></Projects>
                        <Contact></Contact>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
