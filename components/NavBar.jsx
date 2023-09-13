import React from 'react';
import Image from 'next/image';


const NavBar = () => {
  return (
    <nav className=" pt-1 borger-heather text-xs md:text-base bg-black zabove w-full flex flex-col sm:flex sm:flex-col items-center lg:pb-1 sm:justify-between lg:flex-row">
      <div className="flex items-center mb-2 lg:mb-0  ">
        <a className=' flex items-center mr-8 mb-2 lg:mb-0' href='/'>
          <div className="relative ">
            <Image className='py-1  rounded-lg' src="/cyan logo.png" alt="Logo" width={90} height={90} />
          </div>
          <div className=" text-cyan  font-bold  text-3xl ">Vidualize</div>
        </a>




      </div>
      <div className=" lg:gap-1  lg:flex md:mb-0 mb-1 font-semibold lg:space-x-4 lg:mr-6 lg:items-center lg:space-y-0 space-x-4 flex text-heather">
        <a href='/pages/videos' className="hover:text-black transition  text-white duration-100 ease-in-out hidden md:flex">
          <button className="bg-black border-2 border-cyan py-1 px-4 text-lg md:py-1 md:px-4  rounded md:text-lg hover:bg-heather transition  ease-in-out " >Book Now</button>
        </a>

        <a href='/pages/videos' className="hover:text-black transition  text-white duration-100 ease-in-out ">
          <button className="bg-black border-2 border-cyan py-1 px-4 text-lg md:py-1 md:px-4  rounded md:text-lg hover:bg-heather transition  ease-in-out md:mr-10" >Videos</button>
        </a>
        
        <a href="/" className=" hover:text-black transition  text-white duration-100 ease-in-out">
          <Image className='py-1 ' src="/linkedinicon.svg" alt="Logo" width={32} height={32} />
        </a>

        <a href="/" className="hover:text-black transition  text-white duration-100 ease-in-out ">
          <Image className='py-1  rounded-lg' src="/twittericon.png" alt="Logo" width={32} height={32} />
        </a>
        <a href="/" className="hover:text-black transition  text-white duration-100 ease-in-out">
          <Image className='py-1  rounded-lg' src="/instagramicon.svg" alt="Logo" width={32} height={32} />
        </a>

      </div>
    </nav>
  );
};

export default NavBar;
