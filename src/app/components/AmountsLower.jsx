"use client";
import React, { useState } from "react";
import DealButton from "./DealButton";
import { Toaster, toast } from "sonner";

const Amounts = ({ TextButton, icon }) => {
  const [input, setInput] = useState({
    amount: "",
  });

  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleAmount = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    let amount = 0;
  
    if (selectedAmount !== 0) {
      amount = -selectedAmount;
    } else if (input.amount !== "") {
      amount = parseInt(input.amount);
    } else {
      toast.error("Seleccione una cantidad o ingrese un monto");
      return;
    }
  
    if (!isNaN(amount)) {
      if (amount > loggedUser.saldoInicial) {
        toast.error("No tiene suficiente saldo en su cuenta");
        return;
      }
  
      loggedUser.saldoInicial -= amount;
      const transaction = {
        tipo: "Retiro",
        monto: amount,
        fecha: new Date().toISOString(),
      };
      loggedUser.transacciones.push(transaction);

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setSelectedAmount(0);
      setInput({ amount: "" });
      toast.success("Retiro realizado con éxito!");
  
      setTimeout(() => {
        window.location.href = "/dashboard/withdraw";
      }, 500);
    } else {
      toast.error("La cantidad ingresada no es válida");
    }
  };
  

  return (
    <>
      <Toaster position="top-center" />
      <section className="text-xl lg:text-5xl">
        <form onSubmit={handleAmount}>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -5 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-5)}
              >
                $5
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -10 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-10)}
              >
                $10
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -25 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-25)}
              >
                $25
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -50 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-50)}
              >
                $50
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -100 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-100)}
              >
                $100
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -150 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-150)}
              >
                $150
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === -200 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(-200)}
              >
                $200
              </span>
            </div>
            <div className="mt-10 lg:mt-0">
              <span className="text-pokeblue font-bold">
                ${" "}
                <input
                  type="text"
                  name="amount"
                  value={input.amount}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="text-xl lg:text-5xl w-40 lg:w-80 lg:max-w-sm focus:outline-none"
                  placeholder="Otra cantidad"
                />
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <DealButton text={TextButton} icon={icon} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Amounts;
