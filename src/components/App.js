import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './Header';
import Navigation from "./Navigation";
import './App.css';
import User from "./User";
import Search from "./Search";



class App extends Component {

    render() {
        // const {children} = this.props;
        console.log('children', this.props);
        return (
            <div className='App'>
                <div className='app container'>
                    <div className='nav-bar'>
                        <Navigation />
                    </div>
                    <div className='main-container borderBox'>
                        <Header />
                        <div className='main-section borderBox'>
                            <Route path='/user/:access_token/:refresh_token' component={User} />
                            <Route path='/search' component={Search} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
