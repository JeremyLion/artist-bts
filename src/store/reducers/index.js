import { combineReducers } from 'redux';
import spotifyReducer from './spotify'

const rootRedurcer = combineReducers({
  spotify: spotifyReducer
})

export default rootRedurcer