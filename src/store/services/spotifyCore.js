import { spotifyCoreApi } from '.';

export const getCurrentUserPlaylist = () => {
  return new Promise((resolve, reject) => {
    spotifyCoreApi.get('/me/playlists')
    .then((res) => {
      resolve(res.data)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

export const getPlaylistTracks = (id) => {
  return new Promise((resolve, reject) => {
    spotifyCoreApi.get(`/playlists/${id}/tracks`)
    .then((res) => {
      resolve(res.data)
    })
    .catch((err) => {
      reject(err)
    })
  })
}