"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import About from "./About";
import Report from "./Report";
import Slider from "./Slider";
import Button from "./Button";
import LeftImage from "./LeftImage";
import Left from "./Left";
import Form from "./Form";
import Last from "./Last";
import axios from "axios";
import ShowNumberPopup from "./ShowNumberPopup";
import ReviewPopup from "./ReviewPopup";
import Link from "next/link";
import SharePopup from "./SharePopup";
import EnquirePop from "./EnquirePopup";
import AddressPopUp from "./AddressPopup";
import ViewReviewPop from "./ViewReviewPop";

const Hero = () => {

  const [data, setData] = useState([]);
  const [pop, setPop] = useState({
    share: false,
    address: false,
    number: false,
    review: false,
    view: false,
  });
  

  const [enquire, setEnquire] = useState(false);

  const handelEnquire = () => {
    setEnquire(true);
  };

  const handleOpen = () => {
    setPop(true);
  };

  // average
  function getAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;

    const total = reviews.reduce(
      (sum, review) => sum + Number(review.rating),
      0
    );
    const average = total / reviews.length;
    return average.toFixed(1);
  }

  // api implementation
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://www.addressguru.in/api/listing?slug=dsom-graphic-designing-course-dehradun"
        // );
        const response = await axios.get(
          "https://www.addressguru.in/api/listing?slug=dsom-dehradun-school-of-online-marketing"
        );
        setData(response?.data?.results);
        console.log(response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="md:flex  md:gap-2 m-2">
      {/* all the left section */}
      <div className="md:flex-col md:flex h-auto w-full items-start">
        {/* Image section for desktop */}
        <div className="flex gap-5">
          <div className="border-1 hidden lg:block  border-gray-300 rounded-md relative left-[-4px] h-28 w-44  ">
            {data?.img && (
              <Image
                className="w-44 h-28"
                src={`https://www.addressguru.in/images/${data.img}`}
                alt="main-image"
                height={112}
                width={176}
              />
            )}
          </div>

          {/* for desktop */}
          <div className=" hidden lg:flex flex-col">
            <h1 className=" font-bold text-[22px] mb-1">{data?.title}</h1>

            <div className="flex items-center gap-2 font-light">
              <p className="text-[11px] bg-green-700 py-1 px-2 font-bold h-5 flex items-center justify-center rounded-lg text-white">
                {data?.reviews ? getAverageRating(data.reviews) : "Loading..."}
              </p>
              <div className="flex text-sm items-center gap-1 text-orange-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar className="text-[16px] " />
              </div>
              <p>({data?.reviews?.length} reviews)</p>
            </div>
            <div className="flex  text-md text-zinc-900">
              <p>29 Tagore Villa, Above Bank of Baroda, Connau ...</p>
              <Link
                target="_blank"
                className="underline text-blue-600"
                href="https://www.google.com/maps/dir//DSOM+-+Dehradun+School+of+Online+Marketing+%7C+Best+Digital+Marketing+Training+Institute+in+Dehradun+%7C+Digital+Marketing+Course,+29,+above+Bank+Of+Baroda,+Tagore+Villa,+Connaught+Place,+Dehradun,+Uttarakhand+248001/@30.3263665,77.952813,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390929c7b02e7c17:0xded7fbfdd0c7230b!2m2!1d78.0352143!2d30.3263923?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
              >
                view map
              </Link>
            </div>
            <div className="flex mt-4 gap-2 font-semibold">
              <div
                onClick={() => setPop({ ...pop, number: true })}
                className="bg-blue-600 hover:bg-blue-700 text-white  px-4 py-1 text-sm font-semi rounded-sm "
              >
                <Button
                  className="px-2"
                  text="Show Number"
                  Icon={BsFillTelephoneFill}
                />
              </div>
              <div
                onClick={() => setEnquire(true)}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-1 text-sm font-semi rounded-sm"
              >
                <Button
                  className="px-2"
                  text="Enquire Now"
                  Icon={AiFillMessage}
                />
              </div>
              <div
                onClick={() => setPop({ ...pop, share: true })}
                className=" hover:bg-black font-normal  hover:text-white border-1 px-3 py-1 text-sm font-semi rounded-sm "
              >
                <Button className="px-2" text="Share" Icon={FaShareAlt} />
              </div>
              <div
                onClick={() => setPop({ ...pop, review: true })}
                className="text-blue-600 border-1 font-normal  border-blue-600 hover:bg-gray-400 hover:text-white  px-4 py-1 text-sm font-semi rounded-sm "
              >
                <Button className="px-2" text="Write a Review" Icon={FaStar} />
              </div>
              <div className=" border-1 font-normal  px-4 py-1 text-sm font-semi rounded-sm ">
                <Button
                  className="px-2"
                  text={data.views}
                  Icon={MdOutlineRemoveRedEye}
                />
              </div>
            </div>
          </div>
        </div>

        {/* slider section for both mobile and desktop */}

        <Slider sliderImage={data?.images} at={data.posted_at} id={data.id} />

        {/* details and popup section for mobile */}

        <div className="flex flex-col">
          <div className="flex flex-col lg:hidden w-full gap-2 px-1">
            <p className="text-[10px] text-black/70 right-3 mt-1  absolute">
              Posted At: {data.posted_at} | Ad Id: {data.id}
            </p>
            <h1 className=" leading-4 mt-5 text-[15px] font-[700]">
              {data?.title}
            </h1>
            {/* popup at view more */}
            <div className="flex  items-center">
              <div className="flex text-sm items-center overflow-hidden whitespace-nowrap  w-67 ">
                <FaLocationDot className="absolute items-start" />
                <p className="text-sm ml-4">
                  29 Tagore Villa, Above Bank of Baroda, Connaught Place,
                  Dehradun -Uttarakhand
                </p>
              </div>
              ...
              <p
                onClick={()=>setPop({...pop, address: true})}
                className=" ml-2 text-blue-600 text-sm underline capitalize whitespace-nowrap cursor-pointer"
              >
                view more
              </p>
            </div>

            <hr className="w-full h-[1px] text-gray-200 px-5" />
            {/* coaching institute */}

            <div className="flex items-center min-md:w-xl justify-between ">
              <h2 className="font-[700]">{data?.category?.name}</h2>

              <div className="flex items-center gap-1  bg-green-200 px-3 py-1 rounded-xl ">
                <RiVerifiedBadgeFill className="text-lg text-green-600 gap-1" />

                <p className="text-xs">AGVerified</p>
              </div>
            </div>
            <hr className="w-full h-[1px] text-gray-200 px-5" />
            {/* reviews popup is here */}

            <div className="flex justify-between min-md:w-xl">
              <div className="flex items-center gap-1">
                <p className=" text-[18px] bg-[#008236] h-6 px-[3px] py-[4px] font-bold w-14 flex items-center justify-center gap-1 rounded-sm text-white">
                  {data?.reviews
                    ? getAverageRating(data.reviews)
                    : "Loading..."}
                  <FaStar />
                </p>
                <p className="text-orange-500">
                  ({data?.reviews?.length} reviews)
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold gap-1 bg-[#155dfc] text-white px-2  rounded-lg">
                <FaStar className="text-orange-400 text-xs font-semibold" />
                <p onClick={()=>setPop({...pop, view: true})} >View Reviews</p>
              </div>
            </div>
            {/* review and popup section ends */}

            {/* location and other data */}

            <div className="flex flex-col ">
              <p className="flex items-center gap-2">
                {" "}
                <FaLocationDot /> {data?.contact?.city}/{data?.contact?.state}
              </p>
              <p className="flex items-center gap-2 mt-1">
                {" "}
                <FaRegEye />
                Views : {data?.views}
              </p>
              <div className="flex items-center gap-2 ">
                {" "}
                <IoMdTime />{" "}
                <p className="text-sm mt-1">
                  Business Hours : 8:00 AM to 8:00 PM
                </p>{" "}
              </div>
            </div>
            {/* location and other data ends */}

            <hr className="w-full h-[1px] text-gray-200 px-5" />

            {/* Buttons section */}
            <div className="flex justify-between  min-md:w-xl  items-center relative ">
              <div className="bg-[#0dcaf0] text-[14px]   rounded-sm text-center py-1 px-2">
                <Button text="Call" Icon={FaPhoneVolume} />
              </div>
              <div className="bg-[#00a63e] text-[14px]   text-white rounded-sm text-center  py-1 px-2 ">
                <Button text="WhatsApp" Icon={FaWhatsapp} />
              </div>
              <div className="bg-[#198754] text-[14px]  text-white rounded-sm text-center py-1 px-1 pr-2">
                <Button text="Enquiry" Icon={AiFillMessage} />
              </div>
              <div className=" border-1 text-gray-600 text-md  rounded-sm text-center p-1.5 ">
               <Link target="_blank" href='https://www.dsom.in/?utm_source=AddressGuru_India&utm_medium=AddressGuru&utm_campaign=AddressGuru_Listing'>
               <FaGlobe />
               </Link> 
              </div>
            </div>
            {/* button section ends */}
            <hr className="w-full h-[1px] text-gray-200 px-5" />
          </div>
          {/* report section  */}
          <div className="lg:hidden ">
            <Report />
          </div>

          {/* report section ends */}

          {/* about and course section */}

          <About
            title={data.title}
            content={data?.content}
            courses={data?.courses}
            payment={data?.payment}
            facilities={data?.facilities}
          />

          {/* about section ends */}
        </div>
      </div>

      {/* all the right section */}

      <div className="lg:flex flex-col hidden relative right-15 top-35">
        {data?.category && (
          <Left time={data?.clock} category={data?.category?.name} />
        )}
        <div className="max-w-md relative right-4">
          <Report title={data?.title} />
        </div>
        <LeftImage />
        <Form />
        <Last />
      </div>

      {/* heading section for desktop  */}

      <>
        <AddressPopUp
          title ={data.title}
          isOpen={pop.address}
          isClose={() => setPop({ ...pop, address: false })}
        />
        <ShowNumberPopup
          num1={data?.contact?.phone}
          num2={data?.contact?.phone_alt}
          title={data?.title}
          isOpen={pop.number}
          isClose={() => setPop({ ...pop, number: false })}
        />
        <ReviewPopup
          title={data?.title}
          isOpen={pop.review}
          isClose={() => setPop({ ...pop, review: false })}
        />
        <SharePopup
          isOpen={pop.share}
          isClose={() => setPop({ ...pop, share: false })}
        />
        <EnquirePop
          title={data?.title}
          isOpen={enquire}
          isClose={() => setEnquire(false)}
        />
        <ViewReviewPop
        title={data?.title}
        reviews={data?.reviews}
        isOpen={pop?.view}
        isClose={()=> setPop({...pop, view: false})}
        />
        
      </>
    </div>
  );
};

export default Hero;
