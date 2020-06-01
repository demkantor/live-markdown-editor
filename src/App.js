import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Navbar from './components/Navbar';
import Tips from './components/Tips';
import './App.css'



class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <div className="container">
                    <Switch >
                        <Route exact path ='/' component={Home}/>
                        <Route exact path ='/post/:postId' component={Post}/>
                        <Route exact path ='/tips' component={Tips}/>
                    </Switch>
                </div>
            </Router>
        );
    };
};


export default App;
