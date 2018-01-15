import {
    FETCH_PLAYLIST_MENU_PENDING,
    FETCH_PLAYLIST_MENU_SUCCESS,
    FETCH_PLAYLIST_MENU_ERROR,
    FETCH_PLAYLIST_SONG_PENDING,
    FETCH_PLAYLIST_SONG_SUCCESS,
    FETCH_PLAYLIST_SONG_ERROR
} from "../constants";

const stateInitial = {
    fetchPlaylistPending: true,
    fetchPlaylistSongsPending: true,
    playlistMenu: {},
    playlists: {}
    // playlists: {
    //     playlistMenu: {},
    //     playlists: {}
    // }
};


const playlistReducer = (state = stateInitial, action) => {
  switch(action.type){
      case 'FETCH_PLAYLIST_MENU_PENDING':
          return {
              ...state,
              fetchPlaylistPending: true
          };
      case 'FETCH_PLAYLIST_MENU_SUCCESS':
          const { playlists } = action;
          return {
              ...state,
              playlists,
              playlistMenu: action.playlists,
              fetchPlaylistError: false,
              fetchPlaylistPending: false
          };
      case 'FETCH_PLAYLIST_MENU_ERROR':
          return {
              ...state,
              fetchPlaylistError: true,
              fetchPlaylistPending: false
          };
      case 'FETCH_PLAYLIST_SONGS_PENDING':
          return {
              ...state,
              fetchPlaylistPending: true
          };
      case 'FETCH_PLAYLIST_SONGS_SUCCESS':
          return {
              ...state,
              songs: action.songs,
              fetchPlaylistSongsError: false,
              fetchPlaylistSongsPending: false
          };
      case 'FETCH_PLAYLIST_SONGS_ERROR':
          return {
              ...state,
              fetchPlaylistSongsError: true,
              fetchPlaylistSongsPending: false
          };
      default:
          return state;

  }
};

export default playlistReducer;