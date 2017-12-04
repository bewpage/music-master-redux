import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            refresh_token: this.props.params.refresh_token,
            access_token: this.props.params.access_token
        }
    }

    //redux should take that params to state

    refreshToken(){
        const refresh_token = this.state.refresh_token;
        // console.log('refresh token', refresh_token);
        let data = {
            params: {
                refresh_token: refresh_token
            }
        };
        const REFRESH_TOKEN_URL = 'http://localhost:3000/refresh_token';
        axios.get(REFRESH_TOKEN_URL, data)
            .then((response) => {
                let { access_token } = response.data;
                this.setState({
                    access_token
                });
                console.log('new access token', access_token);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    logOff(event){
        event.preventDefault();
        browserHistory.push('/');
        console.log('logging off user')
    }

    render() {
        return (
            <div>
                <div className="">
                    <h1>User</h1>
                    <div className="">
                        <h3>Access Token:</h3>
                        <p>{this.state.access_token}</p>
                        <h3>Refresh Token:</h3>
                        <p>{this.props.params.refresh_token}</p>
                        <button
                            onClick={() => this.refreshToken()}
                        >
                            Refresh Access Token
                        </button>
                        <button
                            onClick={(event) => {this.logOff(event)}}
                        >
                            Log Off
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
