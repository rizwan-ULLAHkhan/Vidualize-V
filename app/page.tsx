'use client'
import Image from 'next/image'
import React, { useEffect, useState,useRef } from 'react';

import FlipCard from '../components/Car'
import VideoPlayer from '../components/Homevideo'
import { getVideoData } from '../public/videoUrl/url';
import MainText from "../components/MainText"
import AboutUs from '../components/About-us'
import ServiceNiche from '../components/Service-Niche'





export default async function Home() {
  const videoURL = [
      '/video/video1.mp4' ,
      '/video/video2.mp4' ,
     '/video/video3.mp4' ,
     '/video/video3.mp4' ,
     '/video/video3.mp4' ,
    // Add more video URLs as needed
  ];
  
  const data= await getVideoData();
  const url= `https://cdn.sanity.io/files/cqojtdan/production/f2d9506ea72a9e2dc2c0c90c0c2d07b74ef320c2.mp4`
  console.log(url)

  return (
    <main className=' flex flex-col'>
      {/* <VideoPlayer videoSrc={url} /> */}
      <MainText/>

      <div className=' flex flex-wrap justify-center bg-white bg-gradient-to-t from-transparent to-black '>
      <FlipCard  frontContent="Short/Reels" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video1.mp4" // Replace this with the relevant information
        thumbnail="/thumb1.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        />
      <FlipCard  frontContent="Podcast/Trailers" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video2.mp4" // Replace this with the relevant information
        thumbnail="/thumb2.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        />
      <FlipCard  frontContent="Long Form" // Replace "/path/to/front-image.jpg" with the actual path to your image
        backContent="video/video3.mp4" // Replace this with the relevant information
        thumbnail="/thumb3.png" // Replace "/somewhere" with the actual link you want to navigate to/ 
        />
      </div>
      <AboutUs/>

      <ServiceNiche/>

      <div className=" flex justify-center bg-heather bg-gradient-to-b from-heather to-white ">
        
        <button  className=" text-3xl bg-cyan my-20 w-96 h-16 hover:border-black border-2 mx-2 rounded-xl hover:bg-white">
            <a href='/pages/CalendlyButton'>
          BOOK A FREE CALL
          </a>
        </button>
        
      </div>
        






      
      
    </main>
  )
}
