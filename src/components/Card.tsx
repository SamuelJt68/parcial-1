import React from "react";
import Getdatos from "@/components/Api"

// Queria traer los datos del api para poder crear los if para poder asignar una card para cadda casa


interface Presentation{
    id: number;
    image:string;
    name: string;
}

interface CardProp {
    id: number;
    image: string;
    name: string;
    gender: string;
    house: string;
    wand: [string, string, number];
};

export function Card_description({id, image, name, gender, house, wand }: CardProp){

    return(
        <div ClassName = "flex-col">


        </div>
    )

}

export function Card({id, image, name}: Presentation){
    return(
        <div ClassName = "flex-col">

        </div>
    )
}
