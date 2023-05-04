import React from "react";
import Title from "@/app/components/Title";
import Amounts from "@/app/components/Amounts";

import deposit from "../../../../public/resources/icons/noun-receive-money-5673855.svg";
// import withdraw from "../../../../public/resources/icons/noun-send-money-5673861.svg";

export const metadata = {
  title: "Dashboard - Depositar",
  description:
    "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
};

const page = () => {
  return (
    <main>
      <Title text="Depositar" />
      <section>
        <p className="text-pokegray font-bold mt-10 text-justify">
          ¡Genial! Si estás buscando una manera rápida y segura de depositar
          dinero, has llegado al lugar correcto. Con nuestro sistema de depósito
          en línea, podrás agregar fondos a tu cuenta bancaria en solo unos
          pocos clics. Es fácil y conveniente.
        </p>
        <h2 className="text-pokeblue font-bold text-md lg:text-2xl mt-10">
          Ingresa la cantidad de dinero a depositar
        </h2>
      </section>
      <Amounts TextButton="Depositar" icon={deposit} />
    </main>
  );
};

export default page;
