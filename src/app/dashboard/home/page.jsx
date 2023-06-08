"use client";
import Title from "@/app/components/Title";
import React from "react";
import ChartHome from "@/app/components/ChartHome";

export const metadata = {
  title: "Dashboard - Home",
  description:
    "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
};

const page = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <main>
      <Title text="Inicio" />
      <section className="">
        <p className="text-pokegray font-bold mt-10 text-justify">
          ¡Bienvenido al banco en línea más seguro y conveniente! Con nuestro
          software de banca en línea, tendrás acceso las 24 horas del día, los 7
          días de la semana, a todas tus cuentas bancarias desde cualquier lugar
          del mundo con conexión a Internet.
        </p>
        <h1 className="text-pokeorange font-bold text-2xl lg:text-5xl mt-10">
          Saldo Disponible: ${userName.saldoInicial}
        </h1>
        <div className="flex flex-row items-center mt-5">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <path
              d="M37.0663 7.66714H12.9327C11.1655 7.66714 9.73267 9.09965 9.73267 10.8672V29.1336C9.73267 30.9012 11.1655 32.3337 12.9327 32.3337H37.0663C38.8336 32.3337 40.2664 30.9012 40.2664 29.1336L40.2661 10.8672C40.2661 9.09965 38.8333 7.66714 37.066 7.66714H37.0663ZM19.1999 27.2171H16.4V12.7836H19.1999V27.2171ZM23.9998 27.2171H21.1999V18.7836H23.9998V27.2171ZM28.7997 27.2171H25.9998V15.9836H28.7997V27.2171ZM33.5997 27.2171H30.7997V23.1836H33.5997V27.2171Z"
              fill="#081226"
            />
          </svg>
          <h2 className="text-pokeblue font-bold text-md lg:text-2xl">
            Tipo de transacciones realizadas
          </h2>
        </div>
        <div>
          <ChartHome />
        </div>
      </section>
    </main>
  );
};

export default page;
