import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { duration } from '../utilities/time'
import { fetchPlaylistTracks } from '../store/actions/spotify'

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
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th>#</th>
              <th>Song</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((item, key) => (
              <tr key={key}>
                <td>{ key + 1 }</td>
                <td><Link to={`/album/${item.track.id}`}>{ item.track.name }</Link></td>
                <td><Link to={`/album/${item.track.album.id}`}>{ item.track.album.name }</Link></td>
                <td>{ duration(item.track.duration_ms) }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Playlist