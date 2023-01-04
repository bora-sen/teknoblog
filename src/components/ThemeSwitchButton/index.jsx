import React, { useState } from 'react'

function ThemeSwitchButton() {
    const [isDark,setIsDark] = useState(false);

    function switchTheme(){
        
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
        else if (!document.documentElement.classList.contains('dark')){
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
        console.log("Theme is Dark: "+isDark);

    }

  return (
    <button className='group flex items-center p-2 bg-gray-900 text-gray-200 rounded-lg dark:bg-gray-200 dark:text-gray-900 transition-2' onClick={switchTheme}>
        <svg className='w-6 h-6 mr-1' width={36} height={36} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.026 2.205a6.364 6.364 0 1 0 7.768 7.768c.135.655.206 1.333.206 2.027 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.694 0 1.372.07 2.026.205Z" /></svg>
        <span className='hidden opacity-0 group-hover:opacity-100 group-hover:block transition-2 text-sm'>{isDark === true ? "Switch To Light Theme" : "Switch To Light Theme"}</span>
    </button>


  )
}

export default ThemeSwitchButton