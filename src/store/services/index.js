import axios from 'axios'
import { spotifyLogin } from './spotifyCore'

const spotifyCoreApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('spotify_accessToken')}`
  },
  validateStatus: (status) => {
    if(status !== 200 && status !== 404) {
      window.location.replace(spotifyLogin)
    }
    return status >= 200 && status < 400
  }
})

export {
  spotifyCoreApi
}