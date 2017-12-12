import React, { Component } from 'react';




class Playlistst extends Component{

    render(){
        const fetchPlaylistPending = this.props.playlists.fetchPlaylistPending;
        const { playlists } = this.props.playlists;
        console.log('playlists ', playlists);
        console.log('fetch pending ', fetchPlaylistPending);
        if(fetchPlaylistPending === true){
            console.log('still pending ...');
            return (
                <div>Still pending ...</div>
            )
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

export default Playlistst;