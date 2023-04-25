import React from "react";

const TableHistory = () => {
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
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-pokegray-light rounded-xl p-4 text-pokeblue">
            <td className="font-bold text-md lg:text-2xl mt-10">$94.5</td>
            <td className="font-bold text-md lg:text-2xl mt-10">
              Electricidad
            </td>
            <td className="font-bold text-md lg:text-2xl mt-10">12/12/2020</td>
          </tr>
          <tr className="bg-pokegray-light rounded-xl p-4 text-pokeblue ">
            <td className="font-bold text-md lg:text-2xl mt-10">$54.4</td>
            <td className="font-bold text-md lg:text-2xl mt-10">
              Pago de internet
            </td>
            <td className="font-bold text-md lg:text-2xl mt-10">12/12/2020</td>
          </tr>
          <tr className="bg-pokegray-light rounded-xl p-4 text-pokeblue ">
            <td className="font-bold text-md lg:text-2xl mt-10">$5.34</td>
            <td className="font-bold text-md lg:text-2xl mt-10">
              Pago de agua
            </td>
            <td className="font-bold text-md lg:text-2xl mt-10">12/12/2020</td>
          </tr>
          <tr className="bg-pokegray-light rounded-xl p-4 text-pokeblue ">
            <td className="font-bold text-md lg:text-2xl mt-10">$240</td>
            <td className="font-bold text-md lg:text-2xl mt-10">
              Pago de telefonia
            </td>
            <td className="font-bold text-md lg:text-2xl mt-10">12/12/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableHistory;
