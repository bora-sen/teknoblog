import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainPost from '../components/MainPost'
import Posts from '../components/Posts'

function Home() {
  return (<>
      <Header />
      <MainPost />
      <Posts />
      <Footer />
  </>)
}

export default Home