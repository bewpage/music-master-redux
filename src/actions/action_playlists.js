import {
    FETCH_PLAYLIST_MENU_PENDING,
    FETCH_PLAYLIST_MENU_SUCCESS,
    FETCH_PLAYLIST_MENU_ERROR,
    FETCH_PLAYLIST_SONG_PENDING,
    FETCH_PLAYLIST_SONG_SUCCESS,
    FETCH_PLAYLIST_SONG_ERROR
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

export const fetchPlaylistSongsPending = () => {
  return {
      type: 'FETCH_PLAYLIST_SONG_PENDING'
  }
};

export const fetchPlaylistSongsSuccess = (songs) => {
  return {
      type: 'FETCH_PLAYLIST_SONG_SUCCESS',
      songs
  }
};

export const fetchPlaylistSongsError = () => {
  return {
      type: 'FETCH_PLAYLIST_SONG_ERROR'
  }
};

export const fetchPlaylistSongs = (userId, playlistId, accessToken) => {
  return dispatch => {
      const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: new Headers({
              'Authorization': 'Bearer ' + accessToken
          })
      });

      dispatch(fetchPlaylistSongsPending());

      fetch(request)
          .then(res => {
              return res.json();
          })
          .then(res => {
              console.log('songs', res.items);
              dispatch(fetchPlaylistSongsSuccess(res.items))
          })
          .catch(e => {
              dispatch(fetchPlaylistSongsError(e));
          })
  }

};