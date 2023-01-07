import { combineReducers } from 'redux';
import spotifyPlaylistReducer from './spotify/spotifyPlaylistReducer';
import spotifyPlaylistTrackReducer from './spotify/spotifyPlaylistTracksReducer'
import spotifyAlbumReducer from './spotify/spotifyAlbumReducer';

const rootRedurcer = combineReducers({
  spotifyPlaylist: spotifyPlaylistReducer,
  spotifyTrackList: spotifyPlaylistTrackReducer,
  spotifyAlbum: spotifyAlbumReducer
})

export default rootRedurcer