import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    {
        id: 1,
        link: 'home',
    },
    {
        id: 2,
        link: 'about',
    },
    {
        id: 3,
        link: 'projects',
    },
    {
        id: 4,
        link: 'contact',
    }
];

const NavBar = () => {

    const [ isNavOpen, setIsNavOpen ] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

  return (
    <div className='flex justify-between items-center w-full h-12 px-4 bg-orange-50 text-black'>
    
        <div>
            <h1 className='text-3xl font-logoSign ml-5 md:ml-10 tracking-widest'>JCL</h1>
        </div>

        {/* Toggle button for mobile nav */}
        <div className='md:hidden cursor-pointer mr-5 md:mr-10 z-10' onClick={handleNavToggle}>
            {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile navigation menu */}
        <ul className={`md:hidden ${isNavOpen ? 'flex' : 'hidden'} flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-50 to-slate-50`}>
            {links.map(({ id, link }) => (
                <li key={id} className='cursor-pointer capitalize text-lg py-2 hover:scale-125 duration-200'>{link}</li>
            ))}
        </ul>
        
        {/* Desktop navigation menu */}
        <ul className='hidden md:flex mr-10'>
            {links.map(({ id, link }) => (
                <li key={id} className='cursor-pointer capitalize text-md px-4 hover:scale-125 duration-200'>{link}</li>
            ))}            
        </ul>
    </div>
  )
}

export default NavBar