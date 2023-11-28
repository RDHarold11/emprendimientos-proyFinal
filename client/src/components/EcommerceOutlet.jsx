import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Ecommerce/Navbar/Navbar'

const EcommerceOutlet = () => {
  return (
    <Navbar>
        <Outlet></Outlet>
    </Navbar>
  )
}

export default EcommerceOutlet