import React, { Component } from 'react';
import { browserHistory } from 'react-router'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import axios from 'axios';
import { setTokens } from "../actions";


class User extends Component {


    componentDidMount() {
        // params injected via react-router, dispatch injected via connect
        const {dispatch, params} = this.props;
        console.log('this.props', this.props);
        console.log('params', params);
        const {access_token, refresh_token} = params;
        dispatch(setTokens({access_token, refresh_token}));
        // dispatch(getMyInfo());
        console.log('this', this);
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
        console.log('logging off user', browserHistory)
    }

    render() {
        return (
            <div>
                <div className="">
                    <h1>User</h1>
                    <div className="">
                        <h3>Access Token:</h3>
                        <p>{this.props.access_token}</p>
                        <h3>Refresh Token:</h3>
                        <p>{this.props.refresh_token}</p>
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


// export default connect(state => state)(User);

function mapStateToProps(state){
    const { access_token, refresh_token } = state.reducer;
    console.log('state tutaj', state);
    return {
        access_token,
        refresh_token
    }
}

export default connect(mapStateToProps, null)(User);




