import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const LandingOutlet = () => {
  return (
    <Navbar>
        <Outlet></Outlet>
    </Navbar>
  )
}

export default LandingOutlet