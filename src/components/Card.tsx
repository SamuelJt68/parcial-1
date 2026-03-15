import React from "react";
import Img from "next/image"
import type { Dictionary } from '@/app/[lang]/dictionaries';


interface Presentation{
    id: number;
    image:string;
    name: string;
    house: string;
}

interface CardProp {
    id: number;
    image: string;
    gender: string;
    house: string;
    wand: {
        wood: string;
        core: string;
        length: number | null;
    };
    name: string;
    dict: Dictionary; 
};

const BgColorHouses: any = {
    Gryffindor: 'bg-[#740001]',    
    Slytherin: 'bg-[#1A472A]', 
    Ravenclaw: 'bg-[#0E1A40]', 
    Hufflepuff: 'bg-[#FFD800]', 
    NoHouse: 'bg-[#D1D5DB]'
        }
const BorderColorHouses: any = {
    Gryffindor: 'border-[#740001]',
    Slytherin: 'border-[#1A472A]',
    Ravenclaw: 'border-[#0E1A40]',
    Hufflepuff: 'border-[#FFD800]',
    NoHouse: 'border-[#D1D5DB]',
        }



export async function Card_description({id, image, gender, house, wand, name, dict}: CardProp ){

    return(
        <div className = "flex-col justify-center items-center text-center">
            <h1 className="text-[#FDB608]">{name}</h1>
            <div className={`grid grid-cols-2 ${BorderColorHouses[house]} border-2 rounded-lg w-[45%] h-[466] mx-auto mt-[3%] overflow-hidden`}>
                <ul className="grid grid-rows-5 text-start pt-[30%] pb-[30%] space-y-0 list-none text-black">
                    <li className=" pt-[10%]">{dict.page.casa}: {house}</li>
                    <li>{dict.page.genero}: {gender}</li>
                    <li className="mb-[10%]">{dict.page.varita}: {wand.wood}</li>
                    <li className="mb-[10%]">{dict.page.madera}: {wand.core}</li>
                    <li className="mb-[10]">{dict.page.longitud}:{wand.length}</li>
                </ul>
                <Img
                        src = {image}
                        alt = "imagen de ${name}"
                        className="object-cover rounded-lg w-full h-full"
                        width={1000}
                        height={1000}
                        >
                        </Img>
            </div>
        </div>
    )

}

export function Card({id, image, name, house}: Presentation){
    return(
        <div className={`w-[200] h-[310] flex flex-col overflow-hidden rounded-xl shadow-2xl`}>
            <div className={`text-center text-white font-bold py-3 ${BgColorHouses[house]}`}>{name}</div>
            <Img
                        src = {image}
                        alt = "imagen de ${name}"
                        className="object-cover"
                        width={1000}
                        height={1000}
                        >
                        </Img>
        </div>
    )
}
