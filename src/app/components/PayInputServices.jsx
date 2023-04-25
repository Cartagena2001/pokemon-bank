import React from "react";
import DealButton from "./DealButton";

import withdraw from "../../../public/resources/icons/noun-send-money-5673861.svg";

const PayInputServices = () => {
  return (
    <section className="mt-10 text-center">
      <div className="flex flex-col">
        <label className="font-bold text-pokegray text-xl">
          Ingrese el numero de cuenta *
        </label>
        <input
          className="border-8 border-pokeblue focus:outline-none focus:border-pokeorange p-5 rounded-xl mt-5 text-2xl text-pokegray font-bold"
          type="text"
          placeholder="0000-0000-0000-0000"
        />
      </div>
      <div className="flex flex-col mt-5">
        <h2 className="text-3xl font-bold text-pokeblue">Monto a pagar: </h2>
        <span className="text-3xl font-bold text-pokeorange mb-5">$90.45</span>
        <DealButton text="Pagar" icon={withdraw} />
      </div>
    </section>
  );
};

export default PayInputServices;
