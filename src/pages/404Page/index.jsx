import React from 'react'
import notFoundImage from './images/404-notFound.svg'

function NotFoundPage() {
  return (
    <section className='flex items-center justify-center flex-col w-full h-screen'>
        <img className='w-[40rem]' src={notFoundImage} alt="Soorrry" />
        <div className='font-montserrat text-5xl text-center'>
        <h1 className='text-9xl mb-4'>404</h1>
        <h2>Üzgünüm, Böyle bir sayfa yok</h2>
        </div>

    </section>
  )
}

export default NotFoundPage