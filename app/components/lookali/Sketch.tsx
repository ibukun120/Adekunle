import Image from "next/image";
import React from "react";

const Sketch = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-white">
      <h1 className="text-3xl font-semibold text-[#009933]">Sketches</h1>

      <div className="mt-10 flex justify-center items-center">
        <Image
          src="/images/lookali/sketch.png"
          alt="flow"
          width={700}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Sketch;
