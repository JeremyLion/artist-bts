import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../../constants/spotify/playlistTypes"

const init = {
  data: [],
  loading: false,
  error: null,
}

const spotifyUserReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST :
      return {
         ...state, loading: true 
      }
    case FETCH_USER_SUCCESS :
      return {
       ...state, data: action.data, loading: false 
      }
    case FETCH_USER_ERROR : 
      return {
        ...state, error: action.error, loading: false
      }
    default : 
      return state
  }
}

export default spotifyUserReducer