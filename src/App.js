import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import OpengraphReactComponent from 'opengraph-react';
import Project from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Parallax, Background } from 'react-parallax';


console.log(process.env.REACT_APP_OPENGRAPH_API_KEY);
const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}
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
                            <div style={{ height: '50vh', width: '600px' }}></div></Parallax>
                        <Project></Project>
                        <Contact></Contact>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
