import Image from 'next/image'
import React from 'react'

const LogoVariant = () => {
  return (
    <div className='bg-white text-black px-6 md:px-12 lg:px-24 xl:px-32 py-12'>
      <h1 className='text-[36px] font-bold text-[#0A7435] tracking-wider text-center'>Logo Variants</h1>
      <p className='text-center mt-2 text-base 2xl:text-[22px]'>To ensure scalability and consistent recognition, the core FarmHive logo was extended into a flexible system of variants suitable for diverse brand touchpoints.</p>

      <div className='mt-12 mb-32'>
        <Image src="/images/farm/Frame.png" alt="Farm Frame" width={200} height={100} className='mx-auto w-3/4 md:w-1/2'/>
      </div>

      <h1 className='text-[36px] font-bold text-[#0A7435] tracking-wider text-center mb-6'>Our Brand Type</h1>
      <p className='mb-6 text-base 2xl:text-[22px]'>The FarmHive logo has been thoughtfully designed to reflect freshness, sustainability, and trust within the agricultural ecosystem. Its clean, modern form—combining a distinctive leaf icon with a friendly, contemporary wordmark—captures the brand’s commitment to healthy food, local farmers, and transparent farm-to-home delivery.</p>

      <p className='mb-6 text-base 2xl:text-[22px]'>To maintain visual consistency across all touchpoints, the full logotype should primarily be displayed in FarmHive Green (Hex: #0A7435) and Harvest Yellow (Hex: #F9BD21). White (#FFFFFF) may be used where higher contrast or better harmony with darker backgrounds is required.</p>

      <p className='mb-6 text-base 2xl:text-[22px]'>The proportions, lettering, icon placement, and spacing of the FarmHive logo must remain unchanged at all times. The logo should never be redrawn, retyped, distorted, or rearranged for any application, ensuring a consistent and recognizable brand presence across digital, print, merchandise, and environmental branding.</p>

      {/* image div */}
      <div>
        <Image src="/images/farm/farm1.png" alt="Farm1" width={800} height={400} className='w-full h-full my-5 pt-8'/>
      </div>
      <div>
        <Image src="/images/farm/farm2.png" alt="Farm2" width={800} height={400} className='w-full h-full'/>
      </div>
    </div>
  )
}

export default LogoVariant
