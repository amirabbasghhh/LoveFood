import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className=" px-2  sm:px-4  md:px-8 lg:px-12 mt-5">
      <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-10">
        <div>
          <h1 className="font-bold border-b-[3px] border-red-500 w-fit mb-4">LOVEFOOD</h1>
          <p className="mb-4 text-sm font-semibold">Food Delivery and Takeout </p>
          <p className="mb-10 text-xs md:text-sm text-gray-500 ">
            BotoFood is an online food ordering and delivery platform launched
            by Uber in 2014. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
          <Link href='/menu' className=" mt-5 text-white bg-red-500 py-2 px-3 rounded-md">See All</Link>
        </div>
        <div>
          <img src="./images/banner.png" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
