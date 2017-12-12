import {
    FETCH_PLAYLIST_MENU_PENDING,
    FETCH_PLAYLIST_MENU_SUCCESS,
    FETCH_PLAYLIST_MENU_ERROR
} from "../constants";
import querystring from 'query-string';

export const fetchPlaylistMenuPending = () => {
  return {
      type: 'FETCH_PLAYLIST_MENU_PENDING'
  };
};

export const fetchPlaylistMenuSuccess = (playlists) => {
    return {
        type: 'FETCH_PLAYLIST_MENU_SUCCESS',
        playlists
    }
};

export const fetchPlaylistMenuError = () => {
  return {
      type: 'FETCH_PLAYLIST_MENU_ERROR'
  }
};


// querystring.stringify({
//     response_type: 'code',
//     client_id: client_id,
//     scope: scope,
//     redirect_uri: redirect_uri,
//     state: state
// offset=2&limit=2"
// }));

// https://api.spotify.com/v1/users/{user_id}/playlists

export const fetchPlaylistsMenu = (userId, accessToken) => {
    return dispatch => {
        const scope = 'user-read-private user-read-email playlist-modify-public';
        const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists?` + querystring.stringify({
            offset: 5,
            limit: 5,
            scope
        }), {
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        });

        dispatch(fetchPlaylistMenuPending());

        fetch(request)
            .then(res => {
                if(res.statusText === 'Unauthorized'){
                    window.location.href = '/';
                }
                return res.json();
            })
            .then(res => {
                dispatch(fetchPlaylistMenuSuccess(res.items));
            })
            .catch(e => {
                dispatch(fetchPlaylistMenuError(e));
            })
    };
};

