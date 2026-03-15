import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'  
import getDatos from "@/components/Api"
import { Card_description } from "@/components/Card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalle de ${name}",
  description: "Consulta información detallada de cada personaje del mundo mágico: casa, actor/actriz, varita, especie, ascendencia y otros datos relevantes",
};

export default async function Detail({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const datos = await getDatos()
  const descripcion = datos?.find((post: any) => post.id.toString() === id)

  if (!descripcion) notFound()

  return (
    <div className="bg-[#e0e0e0] h-[720] pt-[5%]">
      <Card_description
        dict ={dict}
        id={descripcion.id}
        name={descripcion.name}
        image={descripcion.image}
        house={descripcion.house}
        gender={descripcion.gender}
        wand={descripcion.wand}>
        </Card_description>
    </div>
  )
}