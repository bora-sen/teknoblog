import React from 'react'
import style from '../component_styles/footer.module.css';


function Footer() {
  return (
    <section className='bg-gray-200 h-auto mt-12 font-sumana'>
      <div className='flex items-center'>
        <span className=' ml-12 text-5xl font-montserrat'>TeknoBlog</span>
        <div className='flex ml-auto mr-28'>
      <div className='flex mx-28'>
        <div>
          <h2 className={style.subtitle}>Site</h2>
          <hr className='h-[2px] w-full bg-black'/>
          <ul>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              Yazılarımız</a></li>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            Hakkımızda</a></li>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width={20} height={14} x={2} y={7} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            Policies</a></li>
          </ul>
        </div>
      </div>
      <div className='flex mg-x'>
        <div>
          <h2 className={style.subtitle}>Site</h2>
          <hr className='h-[2px] w-full bg-black'/>
          <ul>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              Yazılarımız</a></li>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            Hakkımızda</a></li>
            <li className='flex items-center my-4'><a className={style.link_pill} href="/">
            <svg className='mr-4' width={23} height={23} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width={20} height={14} x={2} y={7} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            Policies</a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>





      




      <div className='text-center text-sm py-2'>
        <span>
        Copyright © 2023 | All Rights Reserved
        </span>
      </div>
    </section>
  )
}

export default Footer