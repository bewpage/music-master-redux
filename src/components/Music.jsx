import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import MusicPlaylistItem from './MusicPlaylistItem';
import './Music.css';
import {connect} from "react-redux";


class Music extends Component {

    render() {
        // console.log('music props', this.props.reducer.tokens);
        const { access_token } = this.props.reducer.tokens;
        const { playlists } = this.props.reducer.playlistReducer;
        // let playlistsTest = playlists.playlists;
        // console.log('token new', access_token);
        // console.log('playlistsTest', playlists);
        return (
            <div>
                {isEmpty(playlists) ? (
                    <div className='container-fluid container-fluid--nospacearound'>
                        <div>please login again</div>
                        <Link to='/'>login</Link>
                    </div>
                ) : (
                    <div className='container-fluid container-fluid--nospacearound'>
                        <MusicPlaylistItem playlists={playlists} access_token={access_token}/>
                    </div>
                )
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return dispatch
};


function mapStateToProps(state){
    return {state}
}

export default connect(mapDispatchToProps, mapStateToProps)(Music);
