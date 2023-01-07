import { FETCH_ALBUM_REQUEST, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_ERROR } from "../../constants/spotify/playlistTypes"

const init = {
  data: [],
  loading: false,
  error: null,
}

const spotifyAlbumReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST :
      return {
         ...state, loading: true 
      }
    case FETCH_ALBUM_SUCCESS : 
      return {
       ...state, data: action.data, loading: false 
      }
    case FETCH_ALBUM_ERROR : 
      return {
        ...state, error: action.error, loading: false
      }
    default : 
      return state
  }
}

export default spotifyAlbumReducer