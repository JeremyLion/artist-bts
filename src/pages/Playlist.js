import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchPlaylistTracks } from '../store/actions/spotify'

const Playlist = () => {
  
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector((state) => state.spotifyTracks)

  useEffect(() => {
//    dispatch(fetchPlaylistTracks())
  }, [])

  return (
    <div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Plays</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Playlist