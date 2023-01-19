import { FETCH_PLAYLIST_ERROR, FETCH_PLAYLIST_REQUEST, FETCH_PLAYLIST_SUCCESS } from "../../constants/spotify/playlistTypes"

const init = {
  data: [],
  loading: false,
  error: null,
}

const spotifyPlaylistReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST :
      return {
         ...state,
         error: null, 
         loading: true 
      }
    case FETCH_PLAYLIST_SUCCESS :
      const filterPlaylist = action.data.filter((x) => x.tracks.total !== 0)
      return {
       ...state, 
       data: filterPlaylist, 
       loading: false 
      }
    case FETCH_PLAYLIST_ERROR : 
      return {
        ...state, error: action.error, loading: false
      }
    default : 
      return state
  }
}

export default spotifyPlaylistReducer