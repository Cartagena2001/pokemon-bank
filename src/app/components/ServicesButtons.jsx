"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import ligth from "../../../public/resources/icons/noun-lightbulb-2906104.svg";
import phone from "../../../public/resources/icons/noun-phone-5674174.svg";
import water from "../../../public/resources/icons/noun-water-1153013.svg";
import www from "../../../public/resources/icons/noun-www-3867915.svg";

const services = [
  {
    name: "Electricidad",
    icon: ligth,
  },
  {
    name: "Agua",
    icon: water,
  },
  {
    name: "Internet",
    icon: www,
  },
  {
    name: "Telefonía",
    icon: phone,
  },
];

const ServicesButtons = () => {

    const [activeService, setActiveService] = useState(null);

    const handleButtonClick = (serviceName) => {
        setActiveService(serviceName);
      };

  return (
    <section className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
      {services.map(({name, icon}) => (
        <div key={name} className={`${
            activeService === name ? "bg-pokeorange" : "bg-pokeblue"
          } hover:bg-pokeorange cursor-pointer p-5 rounded-xl flex flex-col justify-center items-center transition hover:transition`}
          onClick={() => handleButtonClick(name)}>
          <Image
            src={icon}
            alt={name}
            width={150}
            height={150}
          />
          <span className="text-xl font-bold text-white">{name}</span>
        </div>
      ))}
    </section>
  );
};

export default ServicesButtons;
