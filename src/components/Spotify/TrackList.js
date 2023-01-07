import React from 'react'
import { Link } from 'react-router-dom'
import { duration } from '../../utilities/time'

const TrackList = ({data}) => {
  return (
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
  )
}

export default TrackList