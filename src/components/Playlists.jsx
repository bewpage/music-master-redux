import React, { Component } from 'react';
import {connect} from "react-redux";




class Playlistst extends Component{

    componentDidMount(){
        // console.log('props in Playlistst', this.props.reducer);
    }

    render(){
        const fetchPlaylistPending = this.props.reducer.playlistReducer.fetchPlaylistPending;
        const playlists  = this.props.reducer.playlistReducer.playlists;
        console.log('playlists ', playlists);
        console.log('fetch pending ', fetchPlaylistPending);
        if(fetchPlaylistPending === true){
            // console.log('still pending ...');
            return ( <div>Fetch Playlists is still pending ...</div> );

        }else {
            return (playlists.map((playlist, i) => {
                return (
                    <li key={i}>{playlist.name}</li>
                )
                })
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return dispatch
};


function mapStateToProps(state){
    return {state}
}

export default connect(mapDispatchToProps, mapStateToProps)(Playlistst);
