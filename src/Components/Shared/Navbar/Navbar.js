import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.jpg';

const Navbar = () => {
    return (
        <section className='w-10/12 mx-auto py-6'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3 '>
                    <img className='w-10' src={logo} alt="" />
                    <p className='text-2xl font-bold'>Edu <span className='text-orange-400'>Care</span> </p>
                </div>
                <div className='flex gap-4'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>
            </div>
        </section>

    );
};

export default Navbar;