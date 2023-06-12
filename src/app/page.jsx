"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";

const Home = () =>{
  function setUser() {
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          nombre: "Ash Ketchum",
          pin: "1234",
          cuenta: "0987654321",
          saldoInicial: 500.0,
          transacciones: [],
        })
      );
    }
  }

  useEffect(() => {
    setUser();
  }, []);

  const [input, setInput] = useState({
    pin: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (input.pin === loggedUser.pin) {
      toast.success("Bienvenido a pokémon bank");
      setTimeout(() => {
        window.location.href = "/dashboard/home";
      }, 1000);
      localStorage.setItem("loggedin", true);
      Cookies.set("loggedin", true);
    } else {
      toast.error("El PIN es incorrecto");
    }
  };
  
  return (
    <>
      <Toaster position="top-center" />
      <main className="max-w-full">
        <section className="flex flex-col items-center justify-center h-screen">
          <Image
            src="/resources/Logo.svg"
            alt="Pokémon Bank Logo"
            height={300}
            width={300}
            style={{ height: "auto" }}
          />
          <form onSubmit={handleLogin}>
            <div className="mt-20">
              <div className="my-2">
                <h1 className="text-3xl font-bold text-white">
                  Ingrese su PIN
                </h1>
              </div>
              <input
                name="pin"
                value={input.pin}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-100 text-5xl font-bold border-4 border-pokeblue-light rounded-xl p-3 focus:outline-none"
                type="password"
                placeholder="PIN"
              />
            </div>
            <div className="flex items-center justify-center">
            <button
              className="px-20 py-4 bg-pokeorange hover:bg-pokeblue transition hover:transition  text-white font-bold rounded-full text-2xl mt-10"
              type="Submit"
            >
              Ingresar
            </button>
            </div>
          </form>
          <h1 className="text-white">Demo-PIN: 1234</h1>
        </section>
      </main>
    </>
  );
}

export default Home;