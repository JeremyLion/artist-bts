import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { fetchPlaylistTracks } from '../store/actions/spotify'
import * as Spotify from '../components/Spotify'

const Playlist = () => {

  const params = useParams();
  
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector((state) => state.spotifyTrackList)

  useEffect(() => {
   dispatch(fetchPlaylistTracks(params.id))
  }, [dispatch, params.id])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data) {
    return (
      <div>
        <Spotify.TrackList data={data} />
      </div>
    )
  }
}

export default Playlist