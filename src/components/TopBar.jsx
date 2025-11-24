import React from 'react'
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 via-amber-200 to-yellow-50 shadow-md md:flex lg:flex flex-wrap justify-between items-center text-sm px-8 py-1 hidden">
      <div className='flex flex-wrap justify-center items-center space-x-2 py-1'>
        <p className="font-bold">Follow Us:</p>
        <div className="flex flex-wrap justify-center items-center">
            <FaInstagram className="mr-2" size={18} />
            <FaLinkedin className="mr-2" size={18} />
        </div>
      </div>
      <div className='hidden md:flex flex-wrap justify-center items-center space-x-2 py-1'>
        <p className="font-bold">Empowering Excellence, Everywhere</p>
      </div>
      <div className='flex flex-wrap justify-center items-center space-x-2 py-1'>
        <IoMdMail className="mr-1" />
        <p className="font-bold">Contact Us:</p>
        <div className="flex flex-wrap justify-center items-center">
            <a href='mailto:eec@electroniceducare.com' className='text-zinc-500 hover:underline'>eec@electroniceducare.com</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
