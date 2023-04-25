import React from "react";
import Title from "@/app/components/Title";
import ServicesButtons from "@/app/components/ServicesButtons";
import PayInputServices from "@/app/components/PayInputServices";

export const metadata = {
  title: "Dashboard - Pago de servicios",
  description:
    "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
};

const page = () => {
  return (
    <main className="max-w-full">
      <Title text="Pago de Servicio" />
      <section>
        <p className="text-pokegray font-bold mt-10 text-justify">
          ¡Es hora de pagar tus facturas! Con nuestro sistema de pagos en línea,
          puedes pagar tus servicios básicos como agua, luz, internet, planes de
          teléfono, abonos a cuentas, y muchos más desde la comodidad de tu
          hogar o lugar de trabajo.
        </p>
        <ServicesButtons/>
        <PayInputServices/>
      </section>
    </main>
  );
};

export default page;
