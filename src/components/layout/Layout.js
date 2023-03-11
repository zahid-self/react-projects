import React from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'

const Layout = ({ children }) => {
  return (
    <div class="App">
        <Header/>
            { children }
        <Footer/>
    </div>
  )
}

export default Layout