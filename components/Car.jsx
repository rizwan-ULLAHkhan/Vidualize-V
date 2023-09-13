'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/cardtext.scss'







const FlipCard = ({ frontContent, backContent, thumbnail }) => {




  const first = frontContent;
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };
  return (
    <div className='flipCard flex flex-col mx-4 my-4 rounded-xl'>
      <div className="flipCardInner hover:shadow-lg rounded-xl items-center bg-black md:bg-transparent " >

        <div className="flipCardFront flipCardFrontF rounded-xl flex-col-reverse">
          
          <div className='flex rounded-xl'>
            <img src={thumbnail} className='rounded-xl sm:mb-0 mb-20 xs:mb-12' />
          </div>

          <section className='  mb- '>
              <h2 className='sm:text-4xl text-3xl  text-cyan'>{first} </h2>   
          </section>
        </div>


        <div className="flipCardBack  flex-col border-black sm:border-cyan border-2 rounded-xl ">

          <video className=' mt-16 sm:rounded  sm:mt-0 xs:mt-4 ' id="videoPlayer" autoPlay muted loop  >
            <source src={backContent} type="video/mp4" />
          </video>
          <div className=' sm:absolute button-container flex sm:mb-0 mb-8'>
            <button className=' border px-2 rounded-md text-lg border-black bg-cyan'>Click for more</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
