import React, { Fragment, useEffect } from "react";
import { ReactComponent as ArrowIcon } from "./../assets/arrow-left.svg";
import PropTypes from "prop-types";

const Confirm = ({ setShowPage }) => {
  return (
    <div className="relative ">
      <div className="w-[118px] h-[118px] mt-[57px] mb-[35px] ml-[147px] ">
        <div className=" ">
          <img src="/check_blue.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="w-[340px] h-[90px] ml-[34px]">
        <p className="text-[22px] leading-[30px] text-center font-bold">
          Thank you for your purchase. Please check your email for order details
        </p>
      </div>

      <div className="w-[363px] h-[87px] pt-[23px] pl-[23px] pr-[36px] rounded-md  bg-white ml-[19px] mt-[58px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            setShowPage(0);
          }}
        >
          <div>
            <p className="text-[20px] leading-[23.44px] text-black font-bold">
              How to Redeem
            </p>
            <p className=" left-[94px] text-[16px] leading-[24px] text-user-gray">
              Access additional information
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 26.5C20.1797 26.5 26 20.6797 26 13.5C26 6.3203 20.1797 0.5 13 0.5C5.8203 0.5 0 6.3203 0 13.5C0 20.6797 5.8203 26.5 13 26.5ZM14.33 7.53567C14.0735 7.28446 13.662 7.2887 13.4108 7.54514C13.1596 7.80158 13.1638 8.21312 13.4202 8.46433L18.4076 13.35L6 13.35C5.64101 13.35 5.35 13.641 5.35 14C5.35 14.359 5.64101 14.65 6 14.65L18.4076 14.65L13.4202 19.5357C13.1638 19.7869 13.1596 20.1984 13.4108 20.4549C13.662 20.7113 14.0735 20.7155 14.33 20.4643L20.4549 14.4643C20.5797 14.3421 20.65 14.1747 20.65 14C20.65 13.8253 20.5797 13.6579 20.4549 13.5357L14.33 7.53567Z"
                fill="#00B761"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
