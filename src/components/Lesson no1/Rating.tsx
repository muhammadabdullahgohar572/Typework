import React from "react";
import Line from "../../img/navbarimg/Group 33507.png";
import no1 from "../../img/Sun/Rectangle 2187.png";
import no2 from "../../img/Sun/Rectangle 2188.png";
import no3 from "../../img/Sun/Rectangle 2190.png";
import no4 from "../../img/Sun/Rectangle 2192.png";
import no5 from "../../img/Sun/Rectangle 2193.png";
import no6 from "../../img/Sun/Rectangle 2191.png";

const Rating = () => {
  return (
    <>
      <div className="w-full mt-[10%] p-[5%] bg-[#E8E8E8] mt-10% sm:flex items-center text-center justify-center sm:justify-around p-4%">
        <div className="text-2xl font-semibold cursor-pointer">
          <span>
            Insights and <br />
            Performance <br /> Metrics
          </span>
        </div>

        <div className="bg-black cursor-pointer mt-[5%] sm:mt-0 sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white mb-4 sm:mb-0">
          <span>5000+</span>
          <br />
          <span>Total Listings in the System</span>
        </div>

        <div className="bg-black cursor-pointer  sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white mb-4 sm:mb-0">
          <span>1000+</span>
          <br />
          <span>Active Listings</span>
        </div>

        <div className="bg-black cursor-pointer  sm:w-100% p-[2%] sm:ml-[10%] h-full rounded-lg text-center text-white">
          <span>30+</span>
          <br />
          <span>Articles in the Blog</span>
        </div>
      </div>

      <div className="text-center">
        <br />
        <h1 className="text-3xl font-medium">Featured Locations</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Line} alt="Hero Image" />
        </div>
      </div>

      <div className="sm:flex mt-[10%] p-[5%] justify-around">
        <div>
          <img src={no1} alt="" className="sm:p-[5%]" />
        </div>
        <div className=" sm:flex sm:p-[2%]">
          <div>
            <img
              src={no2}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
            <br />
            <img
              src={no5}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
          </div>
          <div className=" sm:p-[2%]">
            <img
              src={no3}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
            <br />
            <img
              src={no6}
              alt=""
              className="sm:mt-0 mt-[5%] sm:p-[0%] p-[5%]"
            />
          </div>
        </div>
        <div>
          <img src={no4} alt="" className="sm:p-[5%]" />
        </div>
      </div>

      <div className="text-center">
        <br />
        <h1 className="text-3xl font-medium">Important Articles</h1>
        <div className="flex justify-center mt-[3%] items-center">
          <img src={Line} alt="Hero Image" />
        </div>
      </div>
    </>
  );
};

export default Rating;
