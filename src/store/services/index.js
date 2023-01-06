import axios from 'axios'

const spotifyCoreApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('spotify_accessToken')}`
  }
})

export {
  spotifyCoreApi
}