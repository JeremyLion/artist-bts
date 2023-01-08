import { combineReducers } from 'redux';
import spotifyPlaylistReducer from './spotify/spotifyPlaylistReducer';
import spotifyPlaylistTrackReducer from './spotify/spotifyPlaylistTracksReducer'
import spotifyAlbumReducer from './spotify/spotifyAlbumReducer';
import spotifyUserReducer from './spotify/spotifyUserReducer';

const rootRedurcer = combineReducers({
  spotifyPlaylist: spotifyPlaylistReducer,
  spotifyTrackList: spotifyPlaylistTrackReducer,
  spotifyAlbum: spotifyAlbumReducer,
  spotifyUser: spotifyUserReducer
})

export default rootRedurcer