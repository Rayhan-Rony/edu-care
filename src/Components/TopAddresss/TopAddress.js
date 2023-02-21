import React from 'react';
import { HiLocationMarker, HiOutlineDeviceMobile, HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const TopAddress = () => {
    return (
        <section className='w-10/12 mx-auto lg:block hidden'>
            <div className='flex justify-between py-2 '>
                <div className='flex items-center gap-2'>
                    <p className='text-orange-300 text-lg'><HiLocationMarker ></HiLocationMarker></p>
                    <p className='text-gray-400 text-xs'>Keraniganj,Dhaka-1310</p>
                    <p className='text-orange-300 text-lg'><HiOutlineDeviceMobile ></HiOutlineDeviceMobile></p>
                    <p className='text-gray-400 text-xs'>+8801985863081</p>
                    <p className='text-orange-300 text-lg'><HiOutlineMail></HiOutlineMail>  </p>
                    <p className='text-gray-400 text-xs'>jobayerahmedrony@gmail.com</p>
                </div>
                <div className='flex items-center text-orange-300 gap-3'>
                    <p title='Facebook'><FaFacebookF></FaFacebookF></p>
                    <p title='Instagram'><FaInstagram></FaInstagram></p>
                    <p title='Twitter'><FaTwitter></FaTwitter></p>
                    <p title='LinkedIn'><FaLinkedinIn></FaLinkedinIn></p>
                    <p title='Youtube'><FaYoutube></FaYoutube></p>
                </div>

            </div>
            <hr />
        </section>
    );
};

export default TopAddress;