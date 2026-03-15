import Image from "next/image";
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import getDatos from "@/components/Api"
import { Card_description } from "@/components/Card";
import { Card } from "@/components/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.",
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound() 

  const dict = await getDictionary(lang)
  const datos = await getDatos();

  return (
    <div className="bg-[#e0e0e0] h-auto"> 
    <h1 className="text-center pt-[3%]">{dict.home.title}</h1>
    <p className="text-center">{dict.home.description}</p>
    <div className="grid grid-cols-3 mt-[3%] pb-[3%] items-center gap-12 mx-auto max-w-[980]">
  {datos?.slice(0, 12).map((post:any) => (
    <div key={post.id} className="ml-[14%] mr-[10%]">
      <Link href={`/${lang}/${post.id}`}>
      <Card id={post.id} image={post.image} name={post.name} house={post.house} />
      </Link>
    </div>
      ))}
    </div>
    </div>
  )
}

