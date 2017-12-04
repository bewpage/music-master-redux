import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
        }
    }


    render() {
        return (
            <div className="login">
                <h2>Here's our login page!</h2>
                <a href="http://localhost:3000/login">spotify login</a>
            </div>
        );
    }
}

export default Login;
