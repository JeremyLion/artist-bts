import React from 'react'
// import { genres } from '../assets/scss/constants'
// import { SongCard } from '../components'
// import { useGetCurrentUserPlaylist } from '../store/services/spotifyCore'

const Discover = () => {
  // const { data, isFetching, error } = useGetCurrentUserPlaylist()
  // console.log('chart data', data)
  const genreTitle = 'Afro Beats'
  
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover { genreTitle }</h2>
        <select 
          name="" 
          id=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5" 
          onChange={() => {}} 
          value="">
          {/* { genres.map((genre) => <option key={genre.value} value={genre.value}>{ genre.title }</option>) } */}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* { Array.from(Array(10), (n, index) => (
            <div>{ n }</div>
          )
        )} */}
        { 
          // Array.from(Array(10)).map((song, i) => (
          //   <SongCard 
          //     key={i}
          //     song={song}
          //     i={i}
          //   />
          // ))
        }
      </div>
    </div>
  )
}

export default Discover