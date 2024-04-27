import React, { useState } from "react";
import logo from "../../img/navbarimg/logo 1.png";
import Bars from "../../img/navbarimg/hamburger-menu-icon.webp";

export const Navbar = () => {
  const [nav, setnav] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      console.log("File uploaded:", fileList[0]);
      // You can perform further actions here, like uploading the file
    }
  };
  return (
    <>
      <div className=" align-middle p-[10%] shadow-xl bg-slate-50 flex fixed justify-between md:justify-around w-full sm:p-[2%] z-50">
        <div>
          <img
            src={logo}
            className="w-[100%]  sm:w-[70%] cursor-pointer"
            alt="This is logo"
          />
        </div>

        <div className="md:flex md:mr-[12%] hidden">
          <div>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Home
            </span>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Rentals
            </span>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Categories
            </span>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              About
            </span>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Contact
            </span>
            <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
              Blog
            </span>
          </div>

          <div className="flex justify-around  md:ml-[20%] lg:ml-[30%]  cursor-pointer">
            <div className="flex justify-between w-[100px] ">
              <div>
                <i className="fa-regular fa-user text-[#E93740]"></i>
                <span className="text-[#E93740]  ">Sign in</span>
              </div>
            </div>

            <div className="bg-[#E93740]   cursor-pointer flex justify-between p-[5%]  w-[120px]  rounded-2xl text-white ">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <span className="bg-[#E93740] cursor-pointer p-[5%] rounded-2xl text-white">
                  <button onClick={handleButtonClick}>
                    <i className="fa-duotone fa-plus"></i> Post Listing
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:hidden ml-[10%]">
          <img
            onClick={() => setnav(!nav)}
            src={Bars}
            className="w-[30%] sm:w-[10%] ml-[70%]   cursor-pointer"
            alt="This is logo"
          />
        </div>
      </div>

      <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {nav ? (
        <div className=" text-center md:hidden h-screen ">
          <span className="font-semibold  md:hidden ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Home
          </span>{" "}
          <br />
          <br />
          <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Rentals
          </span>
          <br />
          <br />
          <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Categories
          </span>
          <br />
          <br />
          <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            About
          </span>
          <br />
          <br />
          <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Contact
          </span>
          <br />
          <br />
          <span className="font-semibold  ml-[4%] cursor-pointer hover:text-[#E93740] hover:underline hover:underline-offset-4">
            Blog
          </span>
          <br /> <br />
          <div>
            <i className="fa-regular fa-user text-[#E93740]"></i>
            <span className="text-[#E93740]  ">Sign in</span>
            <br /> <br /> <br />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <span className="bg-[#E93740] cursor-pointer p-[5%] rounded-2xl text-white">
              <button onClick={handleButtonClick}>
                <i className="fa-duotone fa-plus"></i> Post Listing
              </button>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};
