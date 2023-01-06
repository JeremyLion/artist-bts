import React from 'react'
import { spotifyLogin } from '../store/services/spotifyCore'

const Login = () => {
  return (
    <div>
      <a className="bg-green-800" href={spotifyLogin}>Login</a>
    </div>
  )
}


export default Login