import React from 'react'
import Navigation from '../navigation/Navigation'
import Footer from '../ui/Footer'

const Layout = ({ children }) => {
  return (
    <div className="App">
        <Navigation/>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout