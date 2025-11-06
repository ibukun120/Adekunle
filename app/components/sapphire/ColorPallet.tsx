import React from "react";

const ColorPalette = () => {
  const colors = [
    { name: "Sapphire Blue", hex: "#0F52BA" },
    { name: "Non Photo Blue", hex: "#9BDFEA" },
    { name: "Robin Egg Blue", hex: "#00C2CB" },
    { name: "Orange (Web)", hex: "#FFAF46" },
  ];

  return (
    <div className="flex flex-col items-center justify-center font-[General Sans] bg-white py-10">
      {/* Top two rows */}
      <div className="grid grid-cols-2 w-full max-w-5xl">
        {/* Sapphire Blue */}
        <div
          className="p-3 md:p-8 text-white flex flex-col justify-center items-center md:items-start  md:justify-between"
          style={{ backgroundColor: colors[0].hex }}
        >
          <div>
            <h2 className="text-2xl font-semibold">{colors[0].name}</h2>
            <p className="text-sm mt-2">Hex Code: {colors[0].hex}</p>
          </div>
        </div>

        {/* Non Photo Blue */}
        <div
          className="p-3 md:p-8 text-white flex flex-col justify-center items-center md:items-start  md:justify-between"
          style={{ backgroundColor: colors[1].hex }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">{colors[1].name}</h2>
            <p className="text-sm mt-2 text-white">Hex Code: {colors[1].hex}</p>
          </div>
        </div>

        {/* Robin Egg Blue */}
        <div
          className="p-3 md:p-8 text-white flex flex-col justify-center items-center md:items-start  md:justify-between"
          style={{ backgroundColor: colors[2].hex }}
        >
          <div>
            <h2 className="text-2xl font-semibold">{colors[2].name}</h2>
            <p className="text-sm mt-2">Hex Code: {colors[2].hex}</p>
          </div>
        </div>

        {/* Orange (Web) */}
        <div
          className="p-3 md:p-8 text-white flex flex-col justify-center items-center md:items-start  md:justify-between"
          style={{ backgroundColor: colors[3].hex }}
        >
          <div>
            <h2 className="text-2xl font-semibold">{colors[3].name}</h2>
            <p className="text-sm mt-2">Hex Code: {colors[3].hex}</p>
          </div>
        </div>
      </div>

      {/* Font section */}
      <div
        className="w-full max-w-5xl p-10 text-white"
        style={{ backgroundColor: colors[0].hex }}
      >
        <h1 className="text-5xl font-bold mb-4">General Sans</h1>
        <p className="tracking-wider">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          abcdefghijklmnopqrstuvwxyz
          <br />
          01234567890!@#$%^&*()
        </p>
      </div>
    </div>
  );
};

export default ColorPalette;
