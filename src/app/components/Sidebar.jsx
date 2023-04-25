"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import house from "../../../public/resources/icons/noun-house-5026194.svg";
import deposit from "../../../public/resources/icons/noun-receive-money-5673855.svg";
import withdraw from "../../../public/resources/icons/noun-send-money-5673861.svg";
import payService from "../../../public/resources/icons/noun-bank-2307169.svg";
import history from "../../../public/resources/icons/noun-bill-notification-3820887.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const [links, setLinks] = useState([
    {
      name: "Inicio",
      href: "/dashboard/home",
      icon: house,
      current: false,
    },
    {
      name: "Depositar",
      href: "/dashboard/deposit",
      icon: deposit,
      current: false,
    },
    {
      name: "Retirar",
      href: "/dashboard/withdraw",
      icon: withdraw,
      current: false,
    },
    {
      name: "Pagar Servicios",
      href: "/dashboard/payService",
      icon: payService,
      current: false,
    },
    {
      name: "Historial",
      href: "/dashboard/history",
      icon: history,
      current: false,
    },
  ]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    const currentLink = links.find((link) => link.current);
    if (!currentLink || currentLink.href !== url) {
      const newLinks = links.map((link) => ({
        ...link,
        current: link.href === url,
      }));
      setLinks(newLinks);
    }
  }, [pathname, searchParams]);

  return (
    <div
      className={` ${
        open ? "lg:w-40" : "lg:w-80 "
      } flex flex-col p-8 w-full bg-white shadow duration-300 rounded-3xl`}
    >
      <div className="space-y-1">
        <div className="flex items-center justify-center mb-5">
          <Image
          className="w-auto"
            src="/resources/logo.svg"
            alt="Pokémon Bank Logo"
            height={200}
            width={200}
            // style={{ height: "auto" }}
          />
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
                  onClick={() => router.push(href)}
                  href={href}
                  className={`${
                    current ? "bg-pokeorange" : "bg-pokeblue"
                  } flex items-center p-3 space-x-3 rounded-3xl bg-pokeblue text-white hover:bg-pokeorange transition hover:transition`}
                >
                  <Image src={icon} alt={name} width={40} height={40} />
                  <span className="text-gray-100 font-bold">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <Link
            className="font-bold text-pokeorange text-xl flex justify-center items-center"
            href="/"
          >
            <Image
              src="/resources/icons/close.svg"
              alt="close"
              width={40}
              height={40}
            />
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
