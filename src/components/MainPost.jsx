import React from 'react';
//import style from '../component_styles/main_post.module.css';

function MainPost() {

  return (
    <div className='bg-hero h-96 p-4 bg-no-repeat bg-cover'>
      <div className=''>
        <h3 className='text-4xl font-montserrat'>Lorem ipsum dolor sit amet,</h3>
        <h4>ipsum dolor</h4>
      </div>
      <button className='px-4 text-lg bg-gray-300 hover:bg-gray-500 hover:text-white rounded-sm text-gray-900' >Read More..</button>
    </div>
  )
}

export default MainPost