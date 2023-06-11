"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import ligth from "../../../public/resources/icons/noun-lightbulb-2906104.svg";
import phone from "../../../public/resources/icons/noun-phone-5674174.svg";
import water from "../../../public/resources/icons/noun-water-1153013.svg";
import www from "../../../public/resources/icons/noun-www-3867915.svg";

const services = [
  {
    name: "Electricidad",
    icon: ligth,
    amount: 90.4,
  },
  {
    name: "Agua",
    icon: water,
    amount: 5.3,
  },
  {
    name: "Internet",
    icon: www,
    amount: 45.6,
  },
  {
    name: "Telefonía",
    icon: phone,
    amount: 12.4,
  },
];

const ServicesButtons = () => {
  const [activeService, setActiveService] = useState(null);

  const handleButtonClick = (serviceName) => {
    setActiveService(serviceName);
  };

  const activeAmount = services.find(
    (service) => service.name === activeService
  )?.amount;

  const handlePayment = () => {
    if (activeService) {
      // Obtiene el usuario logueado del localStorage
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      // Verifica que tenga saldo suficiente para pagar el servicio activo
      if (loggedUser.saldoInicial >= activeAmount) {
        // Resta el monto del servicio al saldo inicial del usuario
        loggedUser.saldoInicial -= activeAmount;
        // Crea un objeto transacción con el tipo, el monto y la fecha
        const transaction = {
          tipo: `Pago de ${activeService}`,
          monto: -activeAmount,
          fecha: new Date().toISOString(),
        };
        // Agrega el objeto transacción al array de transacciones del usuario
        loggedUser.transacciones.push(transaction);
        // Actualiza el localStorage con el nuevo usuario
        localStorage.setItem("user", JSON.stringify(loggedUser));

        toast.success("¡Pago realizado con éxito!");
        setTimeout(() => {
          window.location.href = "/dashboard/home";
        }, 500);
      } else {
        toast.error("No tienes saldo suficiente para pagar este servicio");
      }
    } else {
      toast.error("Debes seleccionar un servicio para pagar");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <section className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {services.map(({ name, icon }) => (
          <div
            key={name}
            className={`${
              activeService === name ? "bg-pokeorange" : "bg-pokeblue"
            } hover:bg-pokeorange cursor-pointer p-5 rounded-xl flex flex-col justify-center items-center transition hover:transition`}
            onClick={() => handleButtonClick(name)}
          >
            <Image src={icon} alt={name} width={150} height={150} />
            <span className="text-xl font-bold text-white">{name}</span>
          </div>
        ))}
      </section>
      <div className="flex flex-col mt-5 justify-center items-center">
        <h2 className="text-3xl font-bold text-pokeblue">Monto a pagar: </h2>
        <span className="text-3xl font-bold text-pokeorange mb-5">
          ${activeAmount}
        </span>
        <button
          className="flex justify-center items-center p-3 text-xl px-16 space-x-3 rounded-3xl bg-pokeblue text-white hover:bg-pokeorange transition hover:transition"
          onClick={handlePayment}
        >
          Pagar Servicio
        </button>
      </div>
    </>
  );
};

export default ServicesButtons;
