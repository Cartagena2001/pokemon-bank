import "../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Dashboard",
  description:
    "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function DashLayout({ children }) {
  return (
    <>
    {/* lg:h-screen */}
      <div className="flex-row lg:flex p-10 lg:p-20 lg:gap-10">
        <Image
          className="w-100 z-[-1] fill"
          src="/resources/bg.png"
          alt="Pokémon Bank Logo"
          fill
        />
        <div>
            <Sidebar />
        </div>
        <div className="container mx-auto bg-white rounded-3xl mr-10 mt-5 lg:mt-0">
          <div className="p-10 mx-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
