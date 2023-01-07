import * as SPOTIFY from '../constants/spotify/playlistTypes';
import * as Spotify from '../services/spotifyCore'

const fetchDataRequest = () => ({
  type: SPOTIFY.FETCH_PLAYLIST_REQUEST
});
const fetchDataSuccess = (data) => ({ 
  type: SPOTIFY.FETCH_PLAYLIST_SUCCESS, 
  data 
});
const fetchDataFailure = (error) => ({ 
  type: SPOTIFY.FETCH_PLAYLIST_ERROR, 
  error 
});

const fetchTrackRequest = () => ({
  type: SPOTIFY.FETCH_TRACK_REQUEST
})
const fetchTrackSuccess = (data) => ({
  type: SPOTIFY.FETCH_TRACK_SUCCESS,
  data
})
const fetchTrackFailure = (error) => ({
  type: SPOTIFY.FETCH_TRACK_ERROR,
  error
})

const fetchUserRequest = () => ({
  type: SPOTIFY.FETCH_USER_REQUEST
})
const fetchUserSuccess = (data) => ({
  type: SPOTIFY.FETCH_TRACK_SUCCESS,
  data
})
const fetchUserFailure = (error) => ({
  type: SPOTIFY.FETCH_USER_ERROR,
  error
})


export const fetchPlaylist = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return Spotify.getCurrentUserPlaylist()
    .then((res) => dispatch(fetchDataSuccess(res.items)))
    .catch((err) => dispatch(fetchDataFailure(err.message)))
  };
}

export const fetchPlaylistTracks = (id) => {
  return (dispatch) => {
    dispatch(fetchTrackRequest())
    return Spotify.getPlaylistTracks(id)
    .then((res) => dispatch(fetchTrackSuccess(res.items)))
    .catch((err) => dispatch(fetchTrackFailure(err.message)))
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    return Spotify.getUser()
    .then((res) => dispatch(fetchUserSuccess(res.items)))
    .catch((err) => dispatch(fetchUserFailure(err.message)))
  }
}