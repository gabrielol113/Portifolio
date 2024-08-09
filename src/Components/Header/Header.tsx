'use client'
import React, { useEffect, useState } from 'react';

const navbarStyle = "fixed right-0 top-0 z-10 overflow-x-hidden bg-slate-400 w-1/2 h-1/2 duration-500 transition-transform"
export default function Header(){        
    const [navbarOpen, setNavBarOpen] = useState(false);
    let top = window.scrollY;
    function handleNavBar(){
        setNavBarOpen(!navbarOpen)
        const nav = document.getElementById("nav")!
        console.log(nav);
        if(navbarOpen == true){
            nav.className = nav.className + "w-full";
        }else{            
            nav.className = "hidden";
        }
    }
    function checkScrollTop(){
        top = window.scrollY;
    }
    useEffect(()=>{        
        checkScrollTop();
    },[onwheel])
    return(
        <header className="fixed top-0 start-0 bg-white w-screen h-12 justify-center">
            <div className="flex justify-end">
                <button onClick={ handleNavBar } className={navbarOpen? 'mt-1 transition-transform rotate-90' : "mt-1 transition-transform"}>
                    <div className='flex flex-col items-center justify-evenly h-10 w-10 mr-4'>
                        <div className='border-2 border-black w-7 h-1 rounded-full'></div>
                        <div className='border-2 border-black w-7 h-1'></div>
                        <div className='border-2 border-black w-7 h-1'></div>
                    </div>
                </button>
            </div>
            <nav id='nav' className={navbarOpen? navbarStyle :"hidden"}>
                <div className="flex w-full mb-2 justify-end">
                    <button type='button' onClick={ handleNavBar } className='flex [font-size:24px] w-8 h-8 mr-2 mt-2 justify-end'>X</button>
                </div>
                <button type='button' className="w-full h-12 hover:bg-slate-700 hover:text-white transition-colors">Home</button>
                <button type='button' className="w-full h-12 hover:bg-slate-700 hover:text-white transition-colors">About me</button>
                <button type='button' className="w-full h-12 hover:bg-slate-700 hover:text-white transition-colors">Contact</button>
            </nav>
        </header>
    )
}