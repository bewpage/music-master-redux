import { SPOTIFY_TOKENS, REFRESH_ACCESSE_TOKEN } from "../constants";


export const setTokens = ({access_token, refresh_token}) => {
    return {
        type: SPOTIFY_TOKENS,
        access_token,
        refresh_token
    };
};

export const refreshToken = ({new_access_token}) => {
  return {
      type: REFRESH_ACCESSE_TOKEN,
      new_access_token
  }
};

