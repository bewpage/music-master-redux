import { combineReducers } from 'redux';
import tokens from './reducer_tokens';
import userReducer from './reducer_user';
import playlistReducer from './reducer_playlists';


const reducer = combineReducers({
    tokens,
    userReducer,
    playlistReducer
});

export default reducer;
