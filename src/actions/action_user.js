import {
    SPOTIFY_ME_SUCCESS,
    SPOTIFY_ME_FAILURE,
    // ADD_SONG_TO_LIBRARY_SUCCESS,
    // ADD_SONG_TO_LIBRARY_ERROR
} from "../constants";
// import {browserHistory} from "react-router";

export const fetchUserSuccess = (user) => {
    return {
        type: SPOTIFY_ME_SUCCESS,
        user
    }
};

export const fetchUserError = () => {
  return {
      type: SPOTIFY_ME_FAILURE
  }
};

export const fetchUser = (accessToken) => {
    return dispatch => {
        const API_ME_URI = 'https://api.spotify.com/v1/me';
        const request = new Request(API_ME_URI, {
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        });

        fetch(request)
            .then(res => {
                //send user back to homepage if no token
                if(res.statusText === 'Unauthorized'){
                    // browserHistory.push('/');
                    window.location.href = '/';
                }
                return res.json();
            })
            .then(res => {
                dispatch(fetchUserSuccess(res));
            })
            .catch(e => {
                dispatch(fetchUserError(e));
            });
    };
};

//adding song to user library
// export const addSongToLibrarySuccess = (songId) => {
//     return {
//         type: ADD_SONG_TO_LIBRARY_SUCCESS,
//         songId
//     };
// };
//
// export const addSongToLibraryError = () => {
//     return {
//         type: ADD_SONG_TO_LIBRARY_ERROR
//     }
// };
//
// export const addSongToLibrary = (accessToken, id) => {
//     return dispatch => {
//
//     }
// };