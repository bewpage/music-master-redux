import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router';
import Header from './Header';
import Navigation from "./Navigation";
import User from "./User";
import Search from "./Search";
import Music from "./Music";
import PlayingBar from "./PlayingBar";

import './App.css';


class App extends Component {


    render() {
        return (
            <div className='top-container borderBox'>
                <div className=''>
                    <Navigation />
                </div>
                <div className='row'>
                    <Header />
                </div>
                <div className='borderBox'>
                    <Route path='/music' component={Music} />
                    <Route path='/user/:access_token/:refresh_token' component={User} />
                    <Route path='/search' component={Search} />
                </div>
                <div className='nowPlayingBar-container'>
                    <PlayingBar />
                </div>
            </div>
        );
    }
}






const mapDispatchToProps = (dispatch) => {
    // console.log('dispatch in App', dispatch);
    return dispatch
};

function mapStateToProps(state){
    return {state}
}

export default connect(mapDispatchToProps, mapStateToProps)(App);
