import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import {ColorProvider} from '../src/context/ColorContext'

import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
      <ColorProvider>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
        </ColorProvider>
    </div>
  )
}

export default Root