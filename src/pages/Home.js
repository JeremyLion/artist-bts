import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPlaylist } from "../store/actions/spotify"
import * as Spotify from '../components/Spotify'

const Home = () => {
  const dispatch = useDispatch()
  const { data, error, loading} = useSelector((state) => state.spotifyPlaylist);

  useEffect(() => {
    let isFetch = false
      if(!isFetch) {
        dispatch(fetchPlaylist())
      }
    return () => {
      isFetch = true
    }
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data) {
    return (
      <div className="App">
        <div className="flex flex-wrap gap-4">
          <Spotify.PlaylistCard data={data} />
        </div>
      </div> 
    );
  }
}

export default Home;
