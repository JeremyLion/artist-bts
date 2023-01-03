import { 
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_ERROR 
} from '../constants/spotify/playlistTypes';

import { getCurrentUserPlaylist } from '../services/spotifyCore'

const fetchDataRequest = () => {
  return { type: FETCH_PLAYLIST_REQUEST };
}

const fetchDataSuccess = (data) => {
  return { type: FETCH_PLAYLIST_SUCCESS, data };
}

const fetchDataFailure = (error) => {
  return { type: FETCH_PLAYLIST_ERROR, error };
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return getCurrentUserPlaylist()
    .then((res) => {
      dispatch(fetchDataSuccess(res.items))
    })
    .catch((err) => {
      dispatch(fetchDataFailure(err.message))
    })
  };
}