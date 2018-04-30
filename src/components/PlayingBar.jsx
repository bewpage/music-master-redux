import React, { Component } from 'react';
// import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
// import { fetchUser } from "../actions/action_user";
// import { fetchPlaylistSongs } from "../actions/action_playlists";

class PlayingBar extends Component{

    componentDidMount(){
        // console.log('props in playing bar', this.props);
    }


    songPlay(){
        console.log('this.props', this.props);

    }

    render(){
            // console.log('playing bar this.props', this.props);
        return(
            <footer className='now-playing-bar-container'>
                <div className='now-playing-bar'>
                    <div className='now-playing-bar__left'>
                        <div className='now-playing'>
                            <a href="">
                                <div className='cover-art shadow now-playing__cover-art'
                                     aria-hidden="true"
                                >
                                    title
                                </div>
                            </a>
                            <div className='track-info ellipsis-one-line'>

                            </div>
                            <button className='control-button spoticon-add-16' title='Save to Your Music'></button>
                        </div>
                    </div>
                    <div className='now-playing-bar__center'>
                        <div className='player-controls__buttons'>
                            <button className='control-button spoticon-shuffle-16'
                                    title='Enable shuffle'></button>
                            <button className='control-button spoticon-skip-back-16 control-button--disabled'
                                    title='Previous'></button>
                            <button className='control-button spoticon-play-16 control-button--circled'
                                    title='Play'
                                    onClick={() => this.songPlay()}

                            ></button>
                            <button className='control-button spoticon-skip-forward-16'
                                    title='Next'></button>
                            <button className='control-button spoticon-repeat-16'
                                    title='Enable repeat'></button>
                        </div>
                    </div>
                    <div className='now-playing-bar__right'>right</div>
                </div>
            </footer>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return dispatch
};


function mapStateToProps(state){
    return {state}
}

export default connect(mapDispatchToProps, mapStateToProps)(PlayingBar);