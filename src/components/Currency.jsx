import React from "react";

export default function Currency({ currency, cur, setC, val, vc }) {


  return (
    <div className="h-20 w-[500px] p-5 bg-gradient-to-br from-slate-50 to-gray-50 rounded-md shadow flex justify-between items-center">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5"
        onChange={(e) => setC(e.target.value)}
        value={cur}
      >
        {currency.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div className="w-[300px] relative">
        <input
          type="text"
          className="block px-2.5 py-1.5 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
          placeholder= " "
          onChange={vc}
          value={val}
          onClick={(e) => {e.target.select()}}
        />
      </div>
    </div>
  );
}
