
import React from 'react';
import Img from "next/image"


export default function Header() {

    return (
        
        <header className = "flex-cols bg-[#FDB608] w-screen h-auto justify-center">
            <Img className = "items-center justify-center mx-auto "
            src = "https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt = "logo_app"
            width = {100}
            height= {200}
            >
            </Img>
        
        <div className="items-center text-center gap-2">
          <button
            className={`text-white text-lg font-bold px-3 py-1 rounded transition-colors text-center `}
          >
            EN
          </button>
          <span className="text-white font-bold">|</span>
          <button
            className={`text-white text-lg font-bold px-3 py-1 rounded transition-colors`}
          >
            ES
          </button>
        </div>
        </header>
    )
}


    