import {
    PLAY_SONG,
    STOP_SONG,
    PAUSE_SONG,
    RESUME_SONG
} from "../constants";


const stateInitial = {
        songPlaying: false,
        timeElapsed: 0,
        songId: 0,
        songPaused: true
};

const songsReducer = (state = stateInitial, action) => {
    switch(action.type){
        case 'PLAY_SONG':
            return {
                ...state,
                songPlaying: true,
                songDetails: action.song,
                songId: action.song.id,
                timeElapsed: 0,
                songPaused: false
            };
        case 'STOP_SONG':
            return {
                ...state,
                songPlaying: false,
                songDetails: null,
                timeElapsed: 0,
                songPaused: true
            };
        case 'PAUSE_SONG':
            return {
                ...state,
                songPaused: true

            };
        case 'RESUME_SONG':
            return {
                ...state,
                songPaused: false
            };
        default:
            return state;
    }
};

export default songsReducer;