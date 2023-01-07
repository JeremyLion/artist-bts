import { spotifyCoreApi } from '.';
import { v4 as uuidv4 } from 'uuid';

const authEndpoint  = 'https://accounts.spotify.com/authorize'
const clientId = 'b4923da748a4468a8652091986b783f6'
const redirectUri = 'http://localhost:3000/api/auth/callback/spotify'
const scopes = 'user-read-private user-read-email'
let state = uuidv4();
localStorage.setItem('stateKey', state);

/**
 * @description Spotify Login Url
 */
export const spotifyLogin = `${authEndpoint}?response_type=token
&client_id=${encodeURIComponent(clientId)}
&scope=${encodeURIComponent(scopes)}
&redirect_uri=${encodeURIComponent(redirectUri)}
&state=${encodeURIComponent(state)}`;

/**
 * @description Get Current Users Playlist
 * @returns {object}
 */
export const getCurrentUserPlaylist = () => {
  return new Promise((resolve, reject) => {
    spotifyCoreApi.get('/me/playlists')
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
  })
}

/**
 * @description Get Listed Tracks in Playlist by ID
 * @param {*} id 
 * @returns {object}
 */
export const getPlaylistTracks = (id) => {
  return new Promise((resolve, reject) => {
    spotifyCoreApi.get(`/playlists/${id}/tracks`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
  })
}

/**
 * @description Get Current User Data
 * @param {}
 * @returns {object}
 */
export const getUser = () => {
  return new Promise((resolve, reject) => {
    spotifyCoreApi.get(`/me`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
  })
}