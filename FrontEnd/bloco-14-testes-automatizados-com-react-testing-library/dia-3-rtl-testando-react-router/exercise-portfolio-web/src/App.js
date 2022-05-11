import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1> Meu portifólio</h1>
        </header>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </div>
    );
  }
}

export default App;
