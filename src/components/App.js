import React, { Component } from 'react';
import Header from './Header';
import './App.css';



class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className='App'>
                <div className='app-container'>
                    <div className='left-side-section'>
                        <h4>side bar</h4>
                    </div>
                    <div className='main-section'>
                        <Header />
                        <div className='main-section-container'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
