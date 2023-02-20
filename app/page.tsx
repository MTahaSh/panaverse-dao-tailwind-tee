import React from 'react'
import Blogs from './components/Blogs'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import OurCourses from './components/OurCourses'

export default function page() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Cards/>
      <OurCourses/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
