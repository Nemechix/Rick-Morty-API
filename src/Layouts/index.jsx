import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'



import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root