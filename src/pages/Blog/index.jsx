import React from 'react'
import {Header, Footer, FocusedPost} from '../../components' 

function Blog() {
  return (
    <main className='container mx-auto'>
        <Header />
        <FocusedPost />
        <Footer />
    </main>
  )
}

export default Blog