import React, { Component } from 'react'
import './Header.css';
import TrackSearch from "./TrackSearch";


class Header extends Component {
    render() {
        return (
            <div className='header container borderBox'>
                <div className='row'>
                    <TrackSearch />
                </div>
            </div>
        );
    }
}

export default Header;
