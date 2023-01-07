import { FETCH_TRACK_REQUEST, FETCH_TRACK_SUCCESS, FETCH_TRACK_ERROR } from "../../constants/spotify/playlistTypes"

const init = {
  data: [],
  loading: false,
  error: null,
}

const spotifyPlaylistTrackReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_TRACK_REQUEST :
      return {
         ...state, loading: true 
      }
    case FETCH_TRACK_SUCCESS : 
      return {
       ...state, data: action.data, loading: false 
      }
    case FETCH_TRACK_ERROR : 
      return {
        ...state, error: action.error, loading: false
      }
    default : 
      return state
  }
}

export default spotifyPlaylistTrackReducer