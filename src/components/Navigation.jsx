import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component{

    render(){
        return(
            <div className='navBar borderBox'>
                <div className='navBar-expand'>
                    <ul>
                        <div className='navBar-header'>
                            <Link to={'/user'} className='navBar-header_logo link'><i className="fab fa-spotify fa-3x link-color"></i></Link>
                        </div>
                        <div className='navBar-group'>
                            <li className='navBar-item navBar-item__with-icon'>
                                <Link className='link-subtle navBar-link ellipsis-one-line' to="/search">
                                    Search
                                    <div className='icon search-icon'>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </Link>
                            </li>
                        </div>
                        <div className='navBar-group'>
                            <li className='navBar-item'>
                                <Link
                                    to="/home"
                                    className='link-subtle navBar-link ellipsis-one-line'
                                >
                                   Home
                                </Link>
                            </li>
                            <li className='navBar-item'>
                                <Link
                                    to="/music"
                                    className='link-subtle navBar-link ellipsis-one-line'
                                >
                                    Your Music
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;
