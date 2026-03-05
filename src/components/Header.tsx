import React from "react";
import Img from "next/image"

export default function Header() {
    return (
        <header className = "flex bg-FDB608 w-screen items-center justify-center">
            <Img className = "self-center"
            src = "https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            alt = "logo_app"
            width = {100}
            height= {200}
            >
            </Img>
        </header>
    )
}


    