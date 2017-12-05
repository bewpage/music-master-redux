import { SPOTIFY_TOKENS, REFRESH_ACCESSE_TOKEN } from "../constants";

const tokens = (state = [], action) => {
    switch(action.type){
        case SPOTIFY_TOKENS:
            const { access_token, refresh_token } = action;
            return {access_token, refresh_token};
        case REFRESH_ACCESSE_TOKEN:
            const { new_access_token } = action;
            return {...state, access_token: new_access_token};

        default:
            return state;
    }
};


export default tokens;