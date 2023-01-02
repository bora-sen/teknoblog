import React from 'react'
import {Header,Posts,Footer,Hero} from '../../components'

function Home() {
  return (
    <main className='container mx-auto'>
        <Header />
        <Hero />
        <Posts />
        <Footer />
    </main>

  )
}

export default Home