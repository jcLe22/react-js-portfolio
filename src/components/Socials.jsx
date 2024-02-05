import React from 'react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';

const Socials = () => {

  const socLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: 'https://www.linkedin.com/in/john-christian-lebanto-962bb6194/',
      style: 'rounded-tl-sm'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: 'https://github.com/jcLe22'
    },
    {
      id: 3,
      child: (
        <>
          Email <MdOutgoingMail size={20} />
        </>
      ),
      href: 'mailto:johnchristian.lebanto@gmail.com'
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaFileAlt size={20} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1IhI6KdYUh50M03kliYDPBxkE0enFPrNS/view',
      style: 'rounded-bl-sm'
    }
  ];

  return (
    <div className='hidden lg:flex flex-col top-[45%] left-0 fixed'>
        <ul>

            {socLinks.map(({ id, child, href, style }) => (

              <li key={id} className={`flex justify-between items-center w-28 h-9 px-2 py-1 ml-[-80px] hover:ml-0 hover:rounded-sm duration-300 bg-blue-300 ${style}`}>

                <a href={href} className='flex justify-between items-center w-full font-bold' target='_blank' rel='noreferrer'>
                  {child}
                </a>

              </li>

            ))}

            
        </ul>
    </div>
  )
}

export default Socials