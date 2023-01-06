import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Playlist from '../pages/Playlist'
import Login from '../pages/Login'
import SpotifyCallback from '../pages/callback/SpotifyCallback'

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/auth/callback/spotify" element={<SpotifyCallback />} />
      </Routes>
    </div>
  )
}

export default Layout