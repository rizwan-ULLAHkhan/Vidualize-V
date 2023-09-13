import React from 'react';
import '../styles/service-niche.css'; // Import your CSS file to apply styles
import Image from 'next/image';

const ServiceNiche = () => {
  return (
    <div className="service-niche flex flex-col flex-wrap items-center  md:flex-row ">
      <div className="service-niche-item my-8 border-cyan border-2 hover:border-black">
        <div className="service-icon flex justify-center ">
          <Image src='/production.svg' height={150} width={180}></Image> 
        </div>
        <h2 className="service-title mt-2">Production Assistance</h2>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam
          vitae tortor.
        </p>
      </div>

      <div className="service-niche-item my-8 border-cyan border-2 hover:border-black">
        <div className="service-icon flex justify-center my-2 flex-wrap">
        <Image src='/edit.svg' height={150} width={150}></Image> 
        </div>
        <h2 className="service-title mt-6">Premium Editing</h2>
        <p className="service-description writing">
          Vestibulum ac libero sed velit auctor fringilla. Nulla facilisi. asdasdsfsd
          fdkjdsjkhfsd
        </p>
      </div>

      <div className="service-niche-item my-8 border-cyan border-2 hover:border-black">
        <div className="service-icon flex justify-center my-4">
        <Image src='/support.svg' height={150} width={130}></Image>
        </div>
        <h2 className="service-title mt-8">Professional Support</h2>
        <p className="service-description">
          In hac habitasse platea dictumst. Etiam nec odio eu lorem rhoncus
          feugiat.
        </p>
      </div>
    </div>
  );
};

export default ServiceNiche;
