import { combineReducers } from 'redux';
import spotifyReducer from './spotify'

const rootRedurcer = combineReducers({
  spotifyPlaylist: spotifyReducer
})

export default rootRedurcer