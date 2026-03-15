import React from "react";
import type { Dictionary } from '@/app/[lang]/dictionaries';

type FooterDict = {
  dict: Dictionary;  
};

export default async function Footer({ dict }: FooterDict) {
    return(
        <footer className="bg-[#BBCCBB] h-auto">
        <div className="flex">
            <p className="pl-[15%] mt-[0.5%] ">{dict.footer.derechos}</p>
            <p className="pl-[30%] mt-[0.5%]">{dict.footer.propiedad}</p>
        </div>
        </footer>
    )
}