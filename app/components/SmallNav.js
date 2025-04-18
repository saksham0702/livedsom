import Link from 'next/link'
import React from 'react'

const SmallNav = () => {
  return (  
      <div className="absolute  md:left-26 w-[90vw]   left-5 sm:left-10 top-15 mt-2 mb-3 lg:left-27 lg:w-xl  text-[13px] text-gray-600 overflow-x-auto  whitespace-nowrap">
    <div className="flex items-center w-max">
      <div className="flex text-blue-600">
        <p className='min-w-max underline pr-1' >Home </p> /
        <p className="min-w-max underline pr-1">Coaching Institute</p>/
      </div>
      <p className=" max-w-30  ">
        DSOM - Dehradun School of Online Marketing
      </p>
    </div>
  </div>
  )
}

export default SmallNav