import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistCard = ({data}) => {
  return <>
   { data.map((item, key) => <div className="playlist flex items-top justify-center bg-gray-900" key={key}>
      <Link to={`/playlist/${item.id}`} className="playlist__wrapper hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group">
        { item?.images[0]?.url ?
          <img src={item?.images[0]?.url} className="w-full rounded shadow" /> : 
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-slate-200 h-screen w-full max-h-[200px]"></div>
          </div>
        }
        <h3 className="text-gray-200 font-bold mt-5">{ item.name }</h3>
        <p className="text-gray-400 font-light mt-2 text-xs"> Your daily update of the most played track from around the world...</p>
      </Link>
    </div>
    )}
  </> 
}

export default PlaylistCard