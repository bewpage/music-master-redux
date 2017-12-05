import { SPOTIFY_TOKENS } from "../constants";

export const setTokens = ({access_token, refresh_token}) => {
    return {
        type: SPOTIFY_TOKENS,
        access_token,
        refresh_token
    };
};