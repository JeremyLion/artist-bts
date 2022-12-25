import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import Discover from '../pages/Discover'

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </div>
  )
}

export default Layout