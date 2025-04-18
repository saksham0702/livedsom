import React, { useState } from "react";
import { LuClock4 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp} from "react-icons/fa6";
import Link from "next/link";

// Sample API-like data
const businessHours = {
  Mon: "08:00 AM - 08:00 PM",
  Tue: "08:00 AM - 08:00 PM",
  Wed: "08:00 AM - 08:00 PM",
  Thu: "08:00 AM - 08:00 PM",
  Fri: "08:00 AM - 08:00 PM",
  Sat: "08:00 AM - 08:00 PM",
  Sun: "08:00 AM - 08:00 PM",
};

// Convert JS weekday to keys used in the object
const daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Left = ({ category }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Get today's day
  const todayIndex = new Date().getDay(); // 0 (Sun) to 6 (Sat)
  const today = daysMap[todayIndex];

  return (
    <div className="hidden bg-[#ebeced]/70 w-[348.656px] h-[202.578px] pt-4 pl-6 md:flex flex-col rounded-md relative right-3 mt-3 px-4 gap-2">
      <h1 className="mt-2 font-bold text-[22px]">Quick Information</h1>
      <hr className="text-gray-200" />

      {/* Business Hours Hover Section */}
      <div
        className="items-center flex text-sm text-zinc-900 relative"
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        <LuClock4 className="mr-1 text-lg" />
        <p className="mr-3 text-sm  cursor-default">
          Business Hours: 08:00 AM to 08:00 PM
        </p>
        <IoIosArrowDown className="text-lg" />

        {/* Popup */}
        {showPopup && (
          <div className="absolute top-0 left-0 z-50 bg-white border border-orange-600 rounded-md p-2 shadow-md h-3xl w-80">
            <p className="text-sm flex justify-between mb-1 pl-2 font-bold">Business Hours <FaAngleUp className="mr-5" /> </p>
            <ul className="text-sm leading-6 px-2">
            <div className="flex justify-between">
            <h1 className="font-bold">Day</h1>
            <h1 className="font-bold">Opens at - Closes-at</h1>
            
            </div>
              {Object.entries(businessHours).map(([day, hours]) => (
                <li
                  key={day}
                  className={` py-1 ${
                    day === today ? "text-green-600 font-bold" : "text-gray-800"
                  }`}
                >
                  <div className="flex justify-between">
                 <div>
                  
                 {day}
                 {day === today ? " (Today)" : ""}</div>
                  <div>
                 {hours}
                 </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="text-gray-200" />
      <p className="text-zinc-900">Category: {category}</p>
      <hr className="text-gray-200" />

      <Link target="_blank" href='https://www.dsom.in/?utm_source=AddressGuru_India&utm_medium=AddressGuru&utm_campaign=AddressGuru_Listing'  className="border-[0.1px] border-zinc-300 hover:text-white text-center hover:bg-green-700 delay-100 duration-300 rounded-full text-[12px] whitespace-nowrap w-24 py-1 px-2 text-zinc-700">
        Visit Website
      </Link>
    </div>
  );
};

export default Left;
