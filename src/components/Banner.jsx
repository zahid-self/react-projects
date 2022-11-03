import React from 'react';
import BannerImg from "../assets/images/banner2.png";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center">
        <div className="relative">
            <img className="hidden sm:block w-full" src={BannerImg} alt="sofa" />
            <img className="sm:hidden w-full" src="./assets/banner.png" alt="sofa" />
        </div>
    </div>
  )
}

export default Banner