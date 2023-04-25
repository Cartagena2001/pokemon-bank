import React from 'react'
import Title from "@/app/components/Title";

export const metadata = {
  title: "Dashboard - Pago de servicios",
  description:
    "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
};

const page = () => {
  return (
    <main className="max-w-full">
      <Title text="Pago de Servicio"/>
    </main>
  )
}

export default page