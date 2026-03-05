import Image from "next/image";
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import getDatos from "@/components/Api"
import { Card_description } from "@/components/Card";
import { Card } from "@/components/Card";
import Link from "next/link";

export default async function Home({ any: params }) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()  // 404 si locale inválido

  const dict = await getDictionary(lang)
  const datos = await getDatos();

  return (
    <Link href = "/[id]" className="bg-#e0e0e0">
      {datos?.slice().map((post) => (
                <Card key={post.id} id={post.id} image={post.image} name={post.name}  >
                </Card>
              ))}
    </Link>
    
  )
}

