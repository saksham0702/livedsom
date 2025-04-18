'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoInformation, IoCallSharp, IoHammer } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";
import { ImCogs } from "react-icons/im";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import Button from './Button';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <nav className='text-[#212529] bg-[#F8F9FA] flex items-center py-2 px-3 gap-2 justify-between w-full fixed z-50'>
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-[300px] sm:w-[350px] max-w-[400px]  bg-white z-[999999] transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* logo and close icon */}
        <div className='flex justify-between  items-center px-4 pt-4'>
          <Image
            src="/logopng.png"
            alt='Logo'
            priority
            height={40}
            width={160}
            className='h-14 w-auto'
          />
          <RxCross2
            className='text-[26px] text-black/45 cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>

        {/* link section */}
        <div className="flex flex-col gap-5 mt-8 px-6 text-[15px] pl-15 text-[#212529]">
          {/* Profile & Login */}
          <div className="flex items-center gap-2">
            <Image
              src="/user-nav.png"
              alt="User avatar"
              height={40}
              width={40}
              className="rounded-full w-10 h-10"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white ml-4 mt-4 text-sm px-3 py-[6px] rounded-md">
              Login to your account
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-4 mt-4 text-[16px]">
            <div className="flex items-center gap-2">
              <IoInformation /> <span>About Us</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCallSharp /> <span>Contact Us</span>
            </div>
            <div className="flex items-center gap-2">
              <IoHammer /> <span>Posting Rules</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCard /> <span>Our Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <ImCogs /> <span>Infringement Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <ImCogs /> <span>Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* follow section */}
        <div className='flex flex-col text-2xl gap-2 mt-6 ml-6 pl-10'> 
          <h1>Follow Us On :</h1>
          <div className='flex gap-3 text-blue-700 text-3xl'>
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-[99998]"
          onClick={toggleSidebar}
        />
      )}

      {/* left section */}
      <div>
        <div
          className='px-2 md:py-1 py-2 font-light rounded-[6px] flex items-center justify-center border-[1px] border-gray-300 text-[18px] cursor-pointer'
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu />
        </div>
      </div>

      {/* center logo */}
      <div className='ml-1 flex items-center'> 
        <Image
          src="/logopng.png"
          alt='Logo'
          priority
          height={160}
          width={160}
        />

        {/* mid section choose and search */}
        <div className='hidden lg:flex items-center'>
          <select
            className="w-[321.469px] h-[38px] text-[16px] leading-[24px] font-normal tracking-normal 
              px-1 text-[#212529] bg-white border border-gray-300 rounded-l-md ml-2
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 border-r-0">
            <option>Choose City</option>
            <option value="newyork">New York</option>
            <option value="london">London</option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
          </select>
          <div className="hidden w-[183.562px] h-[38px] lg:flex items-center border border-gray-300 bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Search"
              className="text-[16px] pl-3 tracking-normal text-[#212529]"
            />
          </div>
          <div className="px-1 hover:bg-green-800 mr-10 hover:text-white border-1 border-green-700 font-bold text-green-700 h-9 w-10 rounded-r-md hidden md:flex items-center justify-center">
            <IoSearchSharp className="text-xl" />
          </div>
        </div>
      </div>

      {/* right section */}
      <div>
        <select className='text-blue-700 border-none text-[14px] lg:hidden '>
          <option value="dehradun">Dehradun</option>
        </select>

        <div className='h-[49px] max-w-[560.406px] hidden lg:flex items-center pl-18 gap-5'>
          <div className='flex items-center gap-7 h-full capitalize text-blue-600'>
            <div className='flex flex-col'>
              <MdHome className='w-10 h-7' />
              <p className="text-xs text-center relative bottom-1">to let</p>
            </div>
            <div className='flex flex-col'>
              <FaBriefcase className='text-2xl' />
              <p className="text-xs text-center">jobs</p>
            </div>
            <div className='flex flex-col justify-center'>
              <FaCartShopping className='text-2xl text-center relative left-5' />
              <p className="text-xs text-center">marketplace</p>
            </div>
          </div>

          <div className="h-full w-[1px] bg-gray-300"></div>

          {/* button section */}
          <div className='flex gap-4 items-center'>
            <div className="hover:bg-yellow-400 hover:text-black bg-orange-500 rounded-md px-3 py-3 flex flex-nowrap leading-none tracking-tighter w-32 text-white">
              <Button text="Post Free Add +" />
            </div>
            <div className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md'>
              <Button text="Login" Icon={CgLogIn} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
