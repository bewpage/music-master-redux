import React, { Component } from 'react';
import MusicPlaylistItem from './MusicPlaylistItem';
import './Music.css';
import {connect} from "react-redux";


class Music extends Component{

    render(){
        // console.log('music props', this.props.reducer.playlistReducer.playlists);
        const { playlists } = this.props.reducer.playlistReducer;
        return(
            <div className='container-fluid container-fluid--nospacearound'>
                <MusicPlaylistItem playlists={playlists}/>
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
