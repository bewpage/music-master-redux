import { SPOTIFY_TOKENS } from "../constants";

// the initial state; no tokens and no user info

const initialState = {
  access_token: null,
  refresh_token: null
};


export default (state = initialState, action) => {
    switch(action.type){
        case SPOTIFY_TOKENS:
            const { access_token, refresh_token } = action;
            return  Object.assign({}, state, {access_token, refresh_token});

        default:
            return state;
    }
}