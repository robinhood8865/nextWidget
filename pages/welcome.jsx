import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

const Welcome = () => {
  return (
    <div className="relative w-[400px] h-[601px] rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] font-sans tracking-[-0.5px]">
      <div className="static w-full h-[250px] bg-[#198DDB] rounded-md  ">
        <div className="absolute top-[15px] h-[20px] w-[20px] right-[15px] rounded-full bg-black p-[2.2px]">
          <svg
            className="text-white h-4 w-4 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="absolute top-[25px] left-[25px] text-white font-bold">
          Welcome to
        </div>
        <div className="absolute top-[45px] left-[25px] text-white text-[24px] font-bold">
          Restaurnat ABC
        </div>
        <div className="absolute  w-[363px] h-[256px] rounded-md  bg-white left-[19px] top-[111px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
          <p className="mt-[35px] text-center left-[94px] text-[20px] leading-[23px] text-black font-bold">
            Become a member
          </p>
          <p className=" mt-[14px]  text-center left-[94px] text-[16px] ml-[13px] mr-[10px] leading-[24px] text-[#657378]">
            With more ways to unlock exciting perks, this is your all access
            pass to exculsive rewards.
          </p>
          <button className="mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-[#198DDB] text-white">
            <p className="text-[16px] font-bold">Join now</p>
          </button>
          <p className="mt-[7px]  text-center left-[94px] text-[16px]  text-[#657378]">
            Already have an account?
          </p>
          <button className="mb-[17px] ml-[147px] text-[#198DDB] underline ">
            Sigin in
          </button>
        </div>
      </div>

      <div className="absolute mt-[129px] w-[363px] h-[192px] rounded-md  bg-white ml-[19px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)]">
        <p className="mt-[35px]  text-center text-[20px] font-bold text-black leading-[23px]">
          Vouchers
        </p>
        <p className="mt-[14px]  text-center left-[94px] text-[16px]  text-[#657378]">
          Buy exculsive vouchers and enjoy savings
        </p>
        <button className="mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-[#198DDB]">
          <p className="text-[16px] text-white font-bold">Browse</p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
