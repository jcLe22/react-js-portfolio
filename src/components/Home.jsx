import React from 'react';
import jcImage from '../assets/jc-img.jpg';
import { FaBootstrap, FaCss3Alt, FaFileAlt, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiExpress, SiJquery, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { MdOutgoingMail } from 'react-icons/md';

const feSkills = [
    {
        id: 1,
        feSkill: <FaHtml5 />
    },
    {
        id: 2,
        feSkill: <FaCss3Alt />
    },
    {
        id: 3,
        feSkill: <FaSass />
    },
    {
        id: 4,
        feSkill: <FaBootstrap />
    },
    {
        id: 5,
        feSkill: <SiTailwindcss />
    },
    {
        id: 6,
        feSkill: <DiJavascript />
    },
    {
        id: 7,
        feSkill: <SiJquery />
    },
    {
        id: 8,
        feSkill: <FaReact />
    }
];

const beSkills = [
    {
        id: 1,
        beSkill: <FaNodeJs />
    },
    {
        id: 2,
        beSkill: <SiExpress />
    },
    {
        id: 3,
        beSkill: <SiMongodb />
    },
    {
        id: 4,
        beSkill: <SiMysql />
    }
];

const socLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: 'https://www.linkedin.com/in/john-christian-lebanto-962bb6194/'
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub />
        </>
      ),
      href: 'https://github.com/jcLe22'
    },
    {
      id: 3,
      child: (
        <>
          <MdOutgoingMail size={20} />
        </>
      ),
      href: 'mailto:johnchristian.lebanto@gmail.com'
    },
    {
      id: 4,
      child: (
        <>
          <FaFileAlt size={20} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1IhI6KdYUh50M03kliYDPBxkE0enFPrNS/view'
    }
  ];

const Home = () => {
  return (
    <div name='home' className='bg-gradient-to-b from-orange-50 to-slate-50'>
    <div className='flex flex-col max-w-screen-lg mx-auto md:h-screen md:justify-center px-10 md:items-center'>

        {/* Introduction */}
        <div className='flex flex-col md:flex-row gap-6'>

            <div className='md:order-2 pt-6 md:pt-0'>
                <img src={jcImage} alt='admin-portrait' className='rounded-full border-dashed border-blue-300 border-8 w-80 md:w-full h-auto mx-auto'/>
            </div>

            <div className='flex flex-col justify-center items-center md:items-start md:order-1'>
                <h2 className='text-3xl lg:text-4xl mb-3 border-b-2 border-solid border-blue-300'>
                <span className='hidden md:inline'>Hi, I am </span>
                <span className='font-extrabold'>John Lebanto</span></h2>
                <div>
                    <ul className='flex lg:hidden mb-3 gap-1'>

                        {socLinks.map(({ id, child, href }) => (
                            <li key={id} className='flex items-center justify-center w-9 h-9 bg-blue-300 border-2 rounded drop-shadow-md hover:-translate-y-1 duration-300'>
                                <a href={href} className='text-xl'>{child}</a>
                            </li>
                        ))}

                    </ul>
                </div>
                <p className='text-center md:text-left text-sm lg:text-lg'>I'm a Junior Web Developer, proficient in creating web applications using MERN Stack. I continuously strive to enhance my skills in web design by studying modern techniques and technologies. I am open to learning different roles in the industry.</p>
            </div>

        </div>

        {/* Tech Stack */}
        <div className='flex flex-col lg:flex-row items-center my-6 text-3xl md:text-5xl'>

            <ul className='flex mb-3'>
                {feSkills.map(({ id, feSkill }) => (
                    <li className='mx-1 md:mx-3' key={id}>{feSkill}</li>
                ))}
            </ul>

            <ul className='flex'>
                {beSkills.map(({ id, beSkill }) => (
                    <li className='mx-1 md:mx-3' key={id}>{beSkill}</li>
                ))}
            </ul>

        </div>
    </div>
    </div>
  )
}

export default Home