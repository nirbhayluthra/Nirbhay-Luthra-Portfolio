import React from 'react';

const Header = () => {
  return (
    <nav className='space-x-10'>
      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
           <li>
          <a href='#abtme' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            About Me
          </a>
        </li>
        <li>
          <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </a>
        </li>
          <li>
          <a href='#skills' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Skills
          </a>
        </li>
        <li>
          <a href='https://drive.google.com/file/d/1qWO913jXsFo36PGYKdbALrA2TJIJ78Zj/view?usp=sharing' target='_blank' rel='noreferrer' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Resume
          </a>
        </li>
           <li>
          <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
