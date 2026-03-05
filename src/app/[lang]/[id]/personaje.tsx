import { Card_description } from "@/components/Card";
import React from "react";
export default async function Personaje() {


  const [dict, item] = await Promise.all([
    getItemById(id),
  ]);

  if (!item) {
    return <p>{dict.notFound}</p>;
  }

  return (
    <Card_description className="bg-#e0e0e0 flex-col">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </Card_description>
  );
}
