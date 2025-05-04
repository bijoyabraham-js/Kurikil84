import React from 'react'
import Topbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Songs from '../components/Songs'
import Video from '../components/Video'

function Home() {
  return (
    <div>
        <Topbar/>
        <Banner/>
        <Product/>
        <Songs/>
        <Video/>
        <Footer/>
        
    </div>
  )
}

export default Home