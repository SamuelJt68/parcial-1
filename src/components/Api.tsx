import React from "react";

export default async function Getdatos(){
    try{
        const api = await fetch("https://hp-api.onrender.com/api/characters");
        if (!api.ok){
            throw new Error("Error al optener api");}
        const datos = await api.json();
        return datos;
    }
    catch(err){
        console.log((err as Error).message)
    }
}