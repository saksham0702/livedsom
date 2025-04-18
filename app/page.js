import React from "react";
import Hero from "./components/Hero";
import SmallNav from "./components/SmallNav";



const page = () => {
  return (
    <main className="flex flex-col">
      <div className="  bg-[#eeeeee] h-auto w-full  relative flex items-center justify-center">
        <SmallNav />
         <div className=" md:w-[80%] lg:w-[85%]  w-[95%] my-5 top-15 relative pb-20 mb-32 min-h-[1500px]  border-1 border-gray-500/30 mt-8  bg-white rounded-md">
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default page;
