import React from 'react'
import Topbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Songs from '../components/Songs'
import Video from '../components/Video'
import BandGallery from '../components/BandGallery'
import Album from '../components/Album'
import EventList from '../components/EventList'

function Home() {
  return (
    <div>
        <Topbar/>
        <Banner/>
        <EventList/>
        <Product/>
        <Songs/>
        <Video/>
        {/* <BandGallery/> */}
        <Album/>
        <Footer/>
        
    </div>
  )
}

export default Home