import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa6";


const ShowNumberPopup = ({isClose , isOpen, title, num1, num2}) => {
  return (
    <>
 {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center mt-10 ">
            <div className="bg-white relative bottom-7 flex justify-center  flex-col py-2 px-3 rounded-md max-w-md w-[90%]">
              
            <div>
            <h1 className='text-lg text-start mb-2 font-medium'>{title}</h1>
              <button onClick={isClose} className="absolute top-3 right-3  text-gray-500 hover:text-red-500">
                          <RxCross1 />
                        </button>

                        <div className='flex flex-col items-center gap-1'>
                          <h2 className="font-semibold flex items-center gap-2  text-2xl text-blue-700"> <FaPhone className='bg-orange-600 rounded-sm text-white p-1 ' /> {num1}</h2>
                          <h2 className=" font-semibold flex items-center gap-2 text-2xl text-blue-700"> <FaPhone className='bg-orange-600 rounded-sm text-white p-1 ' /> {num2}</h2>

                          <p className='text-xs'>
                          Don't forget to tell that you found these numbers on

                          </p>
                          <p>
                            <strong>Address Guru India</strong>
                          </p>
                        </div>


           </div>
           
             
                

              </div>

            
          </div>
        </div>
      ) 
       
    }
  </>
  )
}

export default ShowNumberPopup