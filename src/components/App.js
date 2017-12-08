import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './Header';
import Navigation from "./Navigation";
import './App.css';
import User from "./User";



class App extends Component {

    render() {
        // const {children} = this.props;
        console.log('children', this.props);
        return (
            <div className='App'>
                <div className='app-container borderBox'>
                    <div className='nav-bar-container borderBox'>
                        <Navigation />
                    </div>
                    <div className='main-section container borderBox'>
                        <Header />
                        <div className='main-section-container container'>
                            <Route path='/user/:access_token/:refresh_token' component={User} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
