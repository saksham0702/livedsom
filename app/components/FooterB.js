import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { TfiInfo } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";

const FooterB = () => {
  return (
    <div className="flex flex-col  lg:pl-0 ">
      {/* first section of footer */}
      <div className="flex flex-col lg:flex-row lg:pl-0 pl-10 justify-around ">
        {/* part 1 */}
        <div className="  flex flex-col gap-4  pt-8 ">
          <div className="object-cover h-16   w-50 relative left-18 ">
            <Image
              className="absolute  "
              src="/logopng.png"
              alt="Address Guru logo"
              priority
              layout="fill"
            />
          </div>

          <p className="px-4  w-full lg:w-sm">
            Address Guru Is Online Local Business Directory That Provide
            Information About Your Daily Needs Just One Click Away. We Get Your
            Business Listed On It And Grow Online By Reaching Everyone Who
            Search You Online.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pl-5 ">
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* part 2 */}

        <div className=" mt-8 whitespace-nowrap">
          <div className=" relative right-2 flex text-2xl items-center">
            <TfiInfo />

            <h3 className=" text-lg">Important Links</h3>
          </div>

          <ul className="mt-6 space-y-1 text-blue-600  ">
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>

            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Become a Partner
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Posting Rules
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Marketplace
              </a>
            </li>
          </ul>
        </div>
        {/* part 3 */}
        <div className=" mt-8 lg:ml-10 whitespace-nowrap">
          <div className="flex text-2xl relative right-2 items-center ">
            <IoSearchSharp />

            <h3 className=" text-lg">Quick Links</h3>
          </div>
          <ul className="mt-6 space-y-1 text-blue-600 ">
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Post Ad
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Our Plans
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Infringement Policy
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="flex items-center relative right-2 gap-1">
              <FaAngleRight className="text-lg text-black" />
              <a href="#" className="hover:underline">
                Open the app
              </a>
            </li>
          </ul>
        </div>

        {/* part 4 */}
        <div className="pl-2  mt-4 lg:mt-6  ">
          <h3 className="font-semibold text-xl lg:text-2xl lg:w-60 text-black">
            Download our app here...
          </h3>
          <a href="#" className="mt-2 block">
            <Image
              src="/download.jpg"
              alt="google play imsge"
              height={500}
              width={500}
              className="w-40"
            />
          </a>
        </div>
      </div>

      {/* second section */}

      <div className=" mt-15 flex flex-col lg:flex-row lg:justify-around lg:pl-10 pl-8  space-y-1 lg:space-y-0 ">
        {/* contact section */}
        <div>
          <h3 className="font-bold ">Contact by Phone</h3>
          <p className="flex items-center mt-2">
            <FaPhoneAlt className="text-2xl relative top-1 " />
            <a
              href="tel:9410102425"
              className="text-blue-600 text-sm pl-4 hover:underline"
            >
              94-1010-2425
            </a>
          </p>
          <p className="text-xs pl-10 text-gray-600">
            Booking time: 0800 - 2000 hrs
          </p>
        </div>

        {/* feedback section */}
        <div>
          <h3 className="font-bold">Give your Feedback</h3>
          <p className="flex items-center mt-2">
            <FaEnvelope className="text-2xl relative top-1" />
            <a
              href="mailto:contact@addressguru.in"
              className="text-blue-600 text-sm pl-4 hover:underline"
            >
              contact@addressguru.in
            </a>
          </p>
          <p className="text-xs pl-10 text-gray-600">Help us improve!</p>
        </div>

        {/* Services and Support */}
        <div>
          <h3 className="font-bold">Services and Support</h3>
          <p className="flex items-center mt-2">
            <FaHeadset className="text-2xl relative top-1" />
            <a href="#" className="text-blue-600 text-sm pl-4 hover:underline">
              Support Centre
            </a>
          </p>
          <p className="text-xs pl-10 text-gray-600">
            29, Tagore Villa, Dehradun UK
          </p>
        </div>

        {/* Our Partners */}
        <div>
          <h3 className="font-bold lg:pr-10 ">Our Partners</h3>
          <Image
            className="mt-6 relative "
            src="/adxventure_logo.png"
            alt="Partners"
            width={150}
            height={100}
          />
        </div>
      </div>

      {/* third section description and partners */}

      <div className="flex flex-col lg:flex-row lg:gap-5 mb-6">
        {/* Disclaimer */}
        <div className=" text-xs pl-8 pr-2 flex flex-col gap-3  lg:pl-27 lg:w-[950px] text-[#8b8b8b]">
          <p>
            <strong>Disclaimer:</strong> The information provided on AddressGuru
            is submitted by users and businesses and is for general
            informational purposes only. All trademarks, logos, and brand names
            mentioned belong to their respective owners. AddressGuru is not
            responsible for any losses, damages, or disputes arising from user
            interactions, including but not limited to financial transactions or
            service agreements.
          </p>
          <p className="mt-3">
            You are free to use our platform for commercial purposes, but any
            other kind of use is strictly prohibited. We are free to ban any
            type of content or Ad which is not complying with our policies.
          </p>
          <p className="mt-3">
            Before posting anything or becoming a partner of Address Guru, read
            carefully all the posting policies.
          </p>
        </div>

        {/* partners section */}
        <div className="flex justify-end">
          <Image
            className=" mt-4"
            src="/comapnies.png"
            alt="Partners"
            width={250}
            height={100}
          />
        </div>
      </div>

      {/* last section of footer */}
      <div>
        <div className=" w-full text-white flex flex-col lg:flex-row lg:justify-between lg:px-30 pl-0 items-center py-4 h-20 lg:h-15 bg-black ">
          <div className="flex">
            <p>
              <strong>22,512</strong> Live Ads | <strong>22,512</strong> Agents
            </p>
          </div>

          <div className="flex">
            <p>
              © 2024 AddressGuru | by:
              <strong className="text-blue-700">AdxVenture</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterB;
