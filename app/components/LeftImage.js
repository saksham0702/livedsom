import React from 'react'
import Image from 'next/image'

const LeftImage = () => {
  return (
    <div className='max-w-[349px] max-h-[370px] rounded-md border-2 border-[#ebeced]  relative right-3 mt-4 hidden md:flex items-center justify-center'>
        <Image 
         src= '/ad_dsom.jpg'
         alt='dsom img'
         height={500}
         width={500}
         className='h-[95%] w-[95%] rounded-lg '
        />



    </div>
  )
}

export default LeftImage