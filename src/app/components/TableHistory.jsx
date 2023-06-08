"use client";
import React from "react";

const TableHistory = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="mt-10">
      <table className="min-w-full text-left table-auto">
        <thead>
          <tr>
            <th>Monto</th>
            <th>Transaccion</th>
            <th>Fecha</th>
          </tr>
        </thead>
        {
          //validar si hay transacciones si no hay se muestra un mensaje
          loggedUser.transacciones.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="3" className="text-center text-xl">
                  No hay transacciones...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-200">
              {loggedUser.transacciones.map((transaction, index) => {
                const transactionDate = new Date(transaction.fecha);
                const formattedDate = `${transactionDate.getFullYear()}-${(
                  transactionDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, "0")}-${transactionDate
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`;

                return (
                  <tr
                    key={index}
                    className="bg-pokegray-light rounded-xl p-4 text-pokeblue"
                  >
                    <td className="font-bold text-md lg:text-2xl mt-10">
                      ${transaction.monto}
                    </td>
                    <td className="font-bold text-md lg:text-2xl mt-10">
                      {transaction.tipo}
                    </td>
                    <td className="font-bold text-md lg:text-2xl mt-10">
                      {formattedDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )
        }
      </table>
    </div>
  );
};

export default TableHistory;
