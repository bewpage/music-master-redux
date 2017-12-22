import { combineReducers } from 'redux';
import tokens from './reducer_tokens';
import userReducer from './reducer_user';
import playlistReducer from './reducer_playlists';
import songsReducer from './reducer_songs';


const reducer = combineReducers({
    tokens,
    userReducer,
    playlistReducer,
    songsReducer
});

export default reducer;
