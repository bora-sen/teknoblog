import React from 'react';
//import style from './hero.module.css';
import SimpleParallax from 'simple-parallax-js';

function MainPost() {
  let hero_el = document.getElementById('hero-section');
  new SimpleParallax(hero_el,{
  });

  return (
    <div id="hero-section" className='animate-FadeIn bg-hero h-[60vh] p-4 bg-no-repeat bg-cover flex flex-col items-center justify-center'>
        <h3 className='text-4xl font-silk-display text-white md:text-3xl sm:text-2xl'>Lorem ipsum dolor sit amet,</h3>
        <h4 className='font-sumana mb-4 text-white'>ipsum dolor</h4>
        <button className='px-4 text-lg bg-gray-300 hover:bg-gray-500 hover:text-white rounded-sm transition-colors text-gray-900' >Read More..</button>
      </div>
  )
}

export default MainPost