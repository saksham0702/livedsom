import React from "react";
import Image from "next/image";

const About = ({ title, content, courses, payment, facilities }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-[#212529]">
        {/* about section */}
        <h1 className=" md:text-2xl font-[630]  mt-4 mb-2 text-xl   ">
          About Us
        </h1>
        <hr className="w-full lg:w-[120vh] h-[1px] text-gray-200 px-5" />
        <p className="lg:w-[721.328px] sm:w-sm  h-auto text-[#212529]  my-3">
          {content}
        </p>
      </div>

      {/* course facilities payment section */}
      <div className="flex flex-col">
        <h1 className="md:text-2xl font-bold sm:text-xl mt-4 mb-2 text-xl  text-[#212529]">
          Courses
        </h1>
        <hr className="w-full lg:w-[120vh] h-[1px] text-gray-200 px-5" />
        <p className="lg:min-w-[721.328px] sm:w-md h-auto text-sm text-[#212529] sm:text-sm mt-3">
          {title} the following courses:
        </p>

        {/* course section */}

        <div className="flex  flex-wrap my-5 gap-y-1">
          {courses?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex whitespace-nowrap items-center gap-1 w-sm "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>{" "}
                {item}
              </div>
            );
          })}
        </div>

        {/* facility section */}

        <h1 className="md:text-2xl font-bold sm:text-xl mt-4 mb-2 text-xl  text-[#212529]">
          Facilities
        </h1>
        <hr className="w-full lg:w-[120vh] h-[1px] text-gray-200 px-5" />
        <p className="lg:min-w-[721.328px] sm:w-md h-auto text-sm text-[#212529] sm:text-sm mt-3">
          {title} provides the following facilities:
        </p>

        <div className="flex  flex-wrap my-5 gap-y-1">
          {facilities?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex whitespace-nowrap items-center gap-1 w-sm "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>{" "}
                {item}
              </div>
            );
          })}
        </div>

        {/* payment section */}
        <div className="flex flex-col">
          <h1 className="md:text-2xl font-bold  text-xl  mb-2  text-[#212529]">
            Payment Modes
          </h1>
          <hr className="w-full lg:w-[120vh] h-[1px] text-gray-200 px-5" />
          <p className="md:w-[721.328px]  sm:w-[26rem] h-auto text-sm text-[#212529]  my-3">
            {title} provides the following payment modes:
          </p>
          <div className="flex  flex-wrap my-5 gap-y-1">
            {payment?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex whitespace-nowrap items-center gap-1 w-sm "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                      className=""
                    ></path>
                  </svg>{" "}
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        {/* state-city */}

        <div className="flex max-md:flex-col text-[#212529]  max-md:gap-5 gap-7 ">
          <div>
            <h1 className="text-2xl font-bold">State</h1>
            <hr className="w-90 max-md:w-full h-[1px] my-2 text-gray-200 px-5" />
            <p className="">Uttrakhand</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">City</h1>
            <hr className=" w-85 h-[1px] max-md:w-full my-2 text-gray-200 px-5" />
            <p>Dehradun</p>
          </div>
        </div>

        {/* last section */}
        <div className="flex-col flex">
          <h1 className=" lg:text-2xl text-[20px] font-[700] mt-6 sm:w-[26rem]  lg:w-[721.328px]  ">
            Overview - {title}
          </h1>
          <hr className="w-full lg:w-[120vh] h-[1px] text-gray-200 px-5 my-2" />
          <div className="lg:w-[721.328px] sm:w-[26rem]">
            {title} at 29 Tagore Villa, Above Bank of Baroda, Connaught Place,
            Dehradun - Uttarakhand is a Coaching Institute in Dehradun. Their
            courses are:-
            {courses?.join(" ")}. Their facilities are:- {" "}
            {facilities?.join(" ")}, and their acceptable payment mode is:- {" "}.
            {payment?.join(" ")}.
          </div>

          <p className=" my-5 sm:w-[26rem] lg:w-[721.328px]  ">
            Scroll to the top for more details of {title}
          </p>
          <p className="  sm:w-[26rem] lg:w-[721.328px]  ">
            Don't forget to tell, you found {title} <b>Address Guru</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
