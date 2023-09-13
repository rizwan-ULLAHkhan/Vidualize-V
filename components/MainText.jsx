import React from 'react'
import '../styles/maintext.css'
import Tagline from '../components/Tagline'
import Image from 'next/image';

const MainText = () => {
  return (
    <div className=' flex md:h-screen flex-col bg-black'>
      {/* Fixed Navigation Area */}
      <div className="context  md:mt-48 mt-5 flex flex-col-reverse">
        <Tagline />
        <div className="md:mt-4 mt-12 text-7xl md:text-9xl animate-charcter mx-10 md:mx-24 md:justify-end justify-center">
          <p className="">Vidualize</p>
        </div>
      </div>

      {/* Section with Floating Logos */}
      <div class="area">
        <ul class="circles">
          <li><img src="/cyan logo.png" alt='Logo 1' /></li>
          <li><img src="/cyan logo.png" alt='Logo 2' /></li>
          <li><img src="/cyan logo.png" alt='Logo 3' /></li>
          <li><img src="/cyan logo.png" alt='Logo 4' /></li>
        </ul>
      </div>
    </div>
  )
}

export default MainText
