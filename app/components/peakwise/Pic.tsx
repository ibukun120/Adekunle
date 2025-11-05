// import Image from "next/image";
// import React from "react";

// const Pic = () => {
//   return (
//     <div className="min-h-screen py-10 px-4 md:px-12 lg:px-24 relative bg-white flex justify-center items-start w-ful">
//       {/* image 1 */}
//       <div className="absolute left-10 top-12 z-20">
//         <Image
//           src="/images/peakwise/Group48.png"
//           alt="Group48.png"
//           width={680}
//           height={1000}
          
//           className="object-cover"
//         />
//       </div>
//       {/* image 2 */}
//       <div className="relative z-10 ml-[520px] mt-32">
//         <Image
//           src="/images/peakwise/Group49.png"
//           alt="Group49.png"
//           width={680}
//           height={1000}
          
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Pic;




import Image from "next/image";
import React from "react";

const Pic = () => {
  return (
    <div className="hidden relative md:flex justify-center items-start w-full py-10 px-4 md:px-12 lg:px-24 bg-white">
      {/* Image 1 */}
      <div className="absolute left-10 top-12 z-20 h-[1500px] w-[50vw] min-w-[300px]">
        <Image
          src="/images/peakwise/Group48.png"
          alt="Group48.png"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="relative z-10 ml-[40vw] mt-28 h-[1500px] w-[70vw] ">
        <Image
          src="/images/peakwise/Group49.png"
          alt="Group49.png"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Pic;
