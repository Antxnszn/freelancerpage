import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="mt-10 rounded-lg opacity-[100%] hidden w-full lg:block md:w-auto ml-[5em] mr-[15em]" id="navbar-default">
        <ul style={{ color: '#1F1717' }} className="font-normal grid grid-rows-2 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
          <li>
            <a className="text-left block py-2 px-3 rounded md:border-0 md:p-0">About me...</a>
          </li>
          <li>
            <a href="#section1" className="text-left block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Experience</a>
          </li>
          <li>
            <a href="#section2" className="text-left block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Projects</a>
          </li>
          <li>
            <a href="#section3" className="text-left block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
