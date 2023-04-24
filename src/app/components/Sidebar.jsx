"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import IconHouse from "../../../public/resources/icons/noun-home-5673931.svg";

const links = [
  {
    name: "Inicio",
    href: "/dashboard/home",
    icon: "home",
    current: true,
  },
  {
    name: "Depositar",
    href: "/dashboard/deposit",
    icon: "home",
    current: false,
  },
  {
    name: "Retirar",
    href: "/dashboard/withdraw",
    icon: "home",
    current: false,
  },
  {
    name: "Pagar Servicios",
    href: "/dashboard/payService",
    icon: "home",
    current: false,
  },
  {
    name: "Historial",
    href: "/dashboard/history",
    icon: "home",
    current: false,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${
        open ? "lg:w-40" : "lg:w-80 "
      } flex flex-col p-8 w-full bg-white shadow duration-300 rounded-3xl`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-center mb-5">
          <Image
            src="/resources/logo.svg"
            alt="Pokémon Bank Logo"
            height={200}
            width={200}
            style={{ height: "auto" }}
          />
          {/* <button onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button> */}
        </div>
        <div className="flex flex-col text-center text-pokegray font-bold">
          <span>Guillermo Cartagena</span>
          <span>#3453454</span>
          <span>Saldo Disponible: $500</span>
          <span className="border-2 border-pokeorange mt-5"></span>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-5 text-xl">
            {links.map(({ name, href, icon, current }) => (
              <li className="rounded-sm" key={href}>
                <Link
                  href={href}
                  className="flex items-center p-5 space-x-3 rounded-3xl bg-pokeblue text-white hover:bg-pokeorange transition hover:transition"
                >
                  <span className="text-gray-100">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <Link className="font-bold text-pokeorange text-xl" href="/">
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
