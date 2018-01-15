import React, { Component } from 'react';
import { isEmpty, hasIn } from 'lodash';
import axios from 'axios';
import './Music.css';


class MusicPlaylistItem extends Component{


    songPlay(playlist){
        console.log('co to jest', playlist.tracks.href);
        // console.log('token', this.props.access_token)
        const test = playlist.tracks.href;
        fetch

    }


    render(){
        return(
            <div className='_1V5hjg9Q-uySwVgMc32TQb row'>
                {this.props.playlists.map((playlist, i) => {
                    // const { url } = playlist.images[0];
                    // console.log('url', url);
                    // console.log('isEmpty url', isEmpty(playlist.images[0]));
                    // console.log('hasIn url', hasIn(playlist.images[0], 'url'));
                    let coverUrl = {
                        backgroundImage: hasIn(playlist.images[0], 'url') ? `url(${playlist.images[0].url})` : 'url(notProvided)',
                    };
                    return(
                        <div key={i} className='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2'>
                            <div className='media-object' style={{maxWidth: '450px'}}>
                                <div className='media-object-hoverable'>
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
                                            <button className='cover-art-playback' onClick={() => this.songPlay(playlist)}>
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



export default MusicPlaylistItem;
