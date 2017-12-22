import {
    PLAY_SONG,
    STOP_SONG,
    PAUSE_SONG,
    RESUME_SONG
} from "../constants";


const stateInitial = {
    songPlaying: false,
    songPaused: true
};

const songsReducer = (state = stateInitial, action) => {
    switch(action.type){
        case 'PLAY_SONG':
            return {
                ...state,
                songPlaying: true
            };
        case 'STOP_SONG':
            return {
                ...state,
                songPlaying: false
            };
        case 'PAUSE_SONG':
            return {
                ...state,
                songPaused: false

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