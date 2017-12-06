import { SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE } from "../constants";

const stateInitial = {
  user: {}
};

export const userReducer = (state = stateInitial, action) => {
  switch (action.type){
      case 'SPOTIFY_ME_SUCCESS':
          const { user } = action;
          return {
              ...state,
              user,
              fetchUserError: false
          };

      case 'SPOTIFY_ME_FAILURE':
          return {
              ...state,
              fetchUserError: true
          };

      default:
          return state;
  }

};

export default userReducer;