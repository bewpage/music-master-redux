import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { fetchPlaylistSongs } from "../actions/action_playlists";
import { playSong, stopSong, pauseSong, resumeSong } from "../actions/action_songs";
import { isEmpty, hasIn } from 'lodash';
// import axios from 'axios';
import './Music.css';


class MusicPlaylistItem extends Component{

    componentDidMount(){
        console.log('props in MusicPlaylistItem', this.props);
    }

    componentWillReceiveProps(nextProps){
        // console.log('nextProps.songPlaying', nextProps.songPlaying)
    }

    componentWillUpdate(){
        // console.log('update', this.props);
    }


    calculateTime(){
        const timeInterval = setInterval(() => {
            if(this.state.timeElapsed === 30){
                // console.log('hello');
                clearInterval(this.state.timeElapsed);
                this.props.stopSong();
            }
        }, 1000);
        this.setState({
            timeInterval
        })
    }


    songPlay(playlist){
        const { userId } = this.props;
        const playlistId = playlist.id;
        const accessToken = this.props.access_token;

        console.log('playlistId', playlistId);
        // console.log('userId', userId);
        // console.log('token', accessToken);
        this.props.fetchPlaylistSongs(userId, playlistId, accessToken);
        // let audio = new Audio(this.props.songs[0].track.href);
        // let audio = new Audio(this.props.songs[0].track.preview_url);
        // audio.play();
        // I have to add logic for fetch data
        // const songTest = this.props.songs[0].track.preview_url;
        const songTest = this.props.songs[0].track;
        console.log('song test song', songTest);
        console.log('song test song.id', songTest.id);
        this.props.playSong(songTest);
        // console.log('songs list', this.props);
        // this.props.songs.map((song, index) => {
        //     // console.log('songs tracks', song.track);
        //     // let audio = new Audio(song.track.preview_url);
        //     // audio.play()
        // });
    }


    render(){
        console.log('this.props', this.props);
        return(
            <div className='_1V5hjg9Q-uySwVgMc32TQb row'>
                {this.props.playlists.map((playlist, i) => {
                    const showPlay = playlist.id === this.props.playlistId ? ' playing' : ' ';
                    // const { url } = playlist.images[0];
                    // console.log('playlistId in map function', playlist.id);
                    // console.log('this.props.playlistId', this.props.playlistId);
                    // console.log('isEmpty url', isEmpty(playlist.images[0]));
                    // console.log('hasIn url', hasIn(playlist.images[0], 'url'));
                    let coverUrl = {
                        backgroundImage: hasIn(playlist.images[0], 'url') ? `url(${playlist.images[0].url})` : 'url(notProvided)',
                    };

                    return(
                        <div key={i} className='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2'>
                            <div className='media-object' style={{maxWidth: '450px'}}>
                                <div className={`media-object-hoverable${showPlay}`}>
                                    <div className='react-contextmenu-wrapper borderBox'>
                                        <a className='cover-art shadow actionable'
                                           aria-hidden="true"
                                        >
                                            <div>
                                                <div className='icon'>
                                                    <svg width={'80'} height={'81'}  viewBox={'0 0 80 81'} xmlns={'http://www.w3.org/2000/svg'}>
                                                        <title>Playlist Icon</title>
                                                        <path d={'M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z'} fill={'currentColor'} fillRule={'evenodd'}></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    className={`cover-art-image ${hasIn(playlist.images[0], 'url') ? 'cover-art-image-loaded' : ' '}`} style={coverUrl}></div>
                                            </div>
                                            <button className='cover-art-playback'
                                                    onClick={() => this.songPlay(playlist)}
                                                    // onClick={() => {}}
                                            >
                                                <svg className='icon-play' viewBox={'0 0 85 100'}>
                                                    <path fill={'currentColor'} d={'M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z'}>
                                                        <title>PLAY</title>
                                                    </path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                    <div className='mo-info'>
                                        <div className='react-contextmenu-wrapper'>
                                            <a href={playlist.href}
                                               className='mo-info-name'
                                               title={playlist.name}
                                            >
                                                {playlist.name}
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='mo-meta ellipsis-one-line'>
                                    <span>
                                        <a href={playlist.owner.id}>
                                            {playlist.owner.id}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                </div>
        )
    }
}



const mapStateToProps = (state) => {
    const { playlists }  = state.reducer.playlistReducer;
    const { access_token }  = state.reducer.tokens;
    const userId  = state.reducer.userReducer.user.id;
    const { songs } = state.reducer.playlistReducer;
    console.log('state in MusicPlaylistItems', state.reducer);
    // console.log('state songs', songs);
    return {
        playlists,
        access_token,
        userId,
        songs,
        songPlaying: state.reducer.songsReducer.songPlaying,
        timeElapsed: state.reducer.songsReducer.timeElapsed,
        songPaused: state.reducer.songsReducer.songPaused,
        playlistId: state.reducer.playlistReducer.playlists ? state.reducer.playlistReducer.playlists.map(playlist => {return playlist.id}): ' ',
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchPlaylistSongs,
        playSong,
        stopSong,
        pauseSong,
        resumeSong
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MusicPlaylistItem);