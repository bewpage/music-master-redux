import { FETCH_PLAYLIST_MENU_PENDING, FETCH_PLAYLIST_MENU_SUCCESS, FETCH_PLAYLIST_MENU_ERROR } from "../constants";

const playlistReducer = (state = {}, action) => {
  switch(action.type){
      case 'FETCH_PLAYLIST_MENU_PENDING':
          return {
              fetchPlaylistPending: true,
              ...state
          };
      case 'FETCH_PLAYLIST_MENU_SUCCESS':
          const { playlists } = action;
          return {
              ...state,
              playlistMenu: action.playlists,
              playlists,
              fetchPlaylistError: false,
              fetchPlaylistPending: false
          };
      case 'FETCH_PLAYLIST_MENU_ERROR':
          return {
              ...state,
              fetchPlaylistError: true,
              fetchPlaylistPending: false
          };
      default:
          return state;

  }
};

export default playlistReducer;