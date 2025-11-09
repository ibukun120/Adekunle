import React from "react";

const Color = () => {
  return (
    <div className="bg-white text-white px-6 md:px-12 lg:px-24 xl:px-32 py-12">
      {/* first div */}
      <div className="flex md:flex-row flex-col">
        <div className="bg-[#ED2939] p-6 w-full md:w-3/5 pt-20">
          <h1 className="font-semibold">Imperial Red</h1>
          <p>Hex Code: #0F52BA</p>
        </div>
        <div className="bg-black p-6 w-full md:w-1/5 pt-20">
          <h1 className="font-semibold">Black</h1>
          <p>Hex Code: #000000</p>
        </div>
        <div className="bg-transparent text-[#ED2939] p-6 w-full md:w-1/5 pt-20">
          <h1 className="font-semibold">White</h1>
          <p>Hex Code: #FFFFFF</p>
        </div>
      </div>

      {/* second div */}
      <div className=" bg-linear-to-br from-[#ED2939] to-[#000000] p-4 md:p-10 lg:p-20">
        <h1 className="font-bold text-3xl md:text-4xl">Axiforma</h1>
        <p className="mt-6">
          Axiforma is a modern and versatile font that is suitable for wide
          range of design applications, including logos, branding. editorial
          design, web design, and more.
        </p>
        <p className="mt-6">
          One of the distinguishing features of Axiforma is its wide range of
          weights, which include Light, Regular, Bold.
        </p>
        <p className="mt-6">
          Axiforma has a clean and minimalistic look, with precise geometry and
          consistent letterforms. It is characterized by its rounded corners and
          circular letter shapes, which give it a friendly and approachable
          feel. At the same time, its strong vertical and horizontal strokes
          provide a sense of stability and professionalism.
        </p>

        {/* third div */}
      <div className="mt-8 flex justify-between gap-6 flex-col md:flex-row md:overflow-x-scroll lg:overflow-x-hidden">
        <div className="font-bold text-sm leading-6">
          <h1 className="text-2xl">Bold</h1>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>01234567890!@#$%^&*()</p>
        </div>

        <div className="font-medium text-sm leading-6">
          <h1 className="text-2xl">Medium</h1>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>01234567890!@#$%^&*()</p>
        </div>

        <div className="text-sm leading-6">
          <h1 className="text-2xl">Regular</h1>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>01234567890!@#$%^&*()</p>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Color;
