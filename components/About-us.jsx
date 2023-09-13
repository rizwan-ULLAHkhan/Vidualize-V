import React from 'react';
import '../styles/about-us.css'; // Import your CSS file to apply styles
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="about-us bg-gradient-to-t from-heather to-white mt-6">
      <h1 className="about-us-title ">The Team</h1>
      <div className="flex sm:flex-row flex-col  flex-wrap border-1 shadow-xl py-1 items-center justify-evenly rounded-lg ">
        <div className="shareholder hover:border-black border-cyan ">
          <div className='flex  justify-center rounded-full border-4 border-double  '>
            <Image className='  rounded-full  px-1 pt-1 border-cyan hover:border-heather border-4 ' src="/fur.png" alt="Logo" width={150} height={150} />
          </div >
          <h2 className="shareholder-name">Furqan Khan</h2>
          <p className="shareholder-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            quam vitae tortor.
          </p>
        </div>
        <div className="shareholder hover:border-black border-cyan">
          <div className='flex  justify-center rounded-full border-4 border-double  '>
            <Image className='  rounded-full  px-1 pt-1 border-cyan hover:border-heather border-4 ' src="/saif1.png" alt="Logo" width={150} height={150} />
          </div >
          <h2 className="shareholder-name">Saif</h2>
          <p className="shareholder-description">
            Vestibulum ac libero sed velit auctor fringilla. Nulla facilisi.
          </p>
        </div>
        <div className="shareholder hover:border-black border-cyan ">
          <div className='flex  justify-center rounded-full border-4 border-double  '>
            <Image className='  rounded-full  px-1 pt-1 border-cyan hover:border-heather border-4 ' src="/abdullah1.png" alt="Logo" width={150} height={150} />
          </div >
          <h2 className="shareholder-name">Abdullah Khan</h2>
          <p className="shareholder-description">
            In hac habitasse platea dictumst. Etiam nec odio eu lorem rhoncus
            feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
