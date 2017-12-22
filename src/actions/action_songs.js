import {
    PLAY_SONG,
    STOP_SONG,
    PAUSE_SONG,
    RESUME_SONG
} from "../constants";

export const playSong = (song) => {
    return {
        type: 'PLAY_SONG',
        song
    }
};

export const stopSong = () => {
  return {
      type: 'STOP_SONG',
  }
};

export const pauseSong = () => {
    return {
        type: 'PAUSE_SONG',
    }
};

export const resumeSong = () => {
    return {
        type: 'RESUME_SONG',
    }
};