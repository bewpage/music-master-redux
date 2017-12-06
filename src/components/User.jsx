import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router'
import axios from 'axios';
import { setTokens, refreshToken } from "../actions/action_tokens";
import { fetchUser } from "../actions/action_user";
import {fetchPlaylistsMenu} from "../actions/action_playlist";


class User extends Component {



    componentDidMount() {
        console.log('this', this);
        const {params, user} = this.props;
        const {access_token, refresh_token} = params;
        const { id } = user;
        this.props.setTokens({access_token, refresh_token});
        this.props.fetchUser(access_token);
        this.props.fetchPlaylistsMenu(id, access_token);
        console.log('this', this);
    }

    refreshToken(){
        const refresh_token = this.props.tokens.refresh_token;
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
                const new_access_token = access_token;
                // console.log('new access token', new_access_token);
                return this.props.refreshToken({new_access_token});
            })
            .catch((e) => {
                console.log(e);
            });
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
                    <h1>User: {this.props.user.id}</h1>
                    <div className="">
                        <h3>Access Token:</h3>
                        <p>{this.props.tokens.access_token}</p>
                        <h3>Refresh Token:</h3>
                        <p>{this.props.tokens.refresh_token}</p>
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
                    <div>
                        <a onClick={() => browserHistory.push('/search')}
                        >SEARCH</a>
                    </div>
                    <div>
                        <p>My Playlists:</p>
                        <ul>
                            {this.props.playlists.playlists.map((playlist, i) => {
                                return (

                                        <li key={i}>{playlist.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


// export default connect(state => state)(User);

function mapStateToProps(state){
    const { access_token, refresh_token } = state.reducer.tokens;
    const { id } = state.reducer.userReducer.user;
    const {playlistMenu, playlists } = state.reducer.playlistReducer;
    console.log('state tutaj', state);
    console.log('state id', id);
    return {
        tokens: {
            access_token,
            refresh_token,
        },
        user: {
            id
        },
        playlists: {
            playlistMenu,
            playlists
        }
    }
}



// export default connect(mapStateToProps, null)(User);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setTokens,
        refreshToken,
        fetchUser,
        fetchPlaylistsMenu
    }, dispatch)
};




export default connect(mapStateToProps, mapDispatchToProps)(User);




