import React from 'react'
import {Header,Posts,Footer,Hero} from '../../components'

function Home() {
  return (
    <main className='container mx-auto dark:bg-gray-900 dark:text-gray-300'>
        <Header />
        <Hero />
        <Posts />
        <Footer />
    </main>

  )
}

export default Home