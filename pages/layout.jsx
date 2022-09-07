import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Welcome from "./welcome";
import Register from "./regiter";
import Top from "./top";

const Layout = ({ setShowWidget }) => {
  const [showPage, setShowPage] = useState(0);

  return (
    <div>
      <div className="w-[400px] h-[601px] rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] tracking-[-0.5px]">
        <div
          onClick={() => {
            setShowWidget(false);
          }}
          className="cursor-pointer z-10 absolute top-[15px] h-[20px] w-[20px] right-[15px] rounded-full bg-black p-[2.2px] opacity-50"
        >
          <svg
            className="text-white h-4 w-4 "
            r
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              // strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {showPage == 0 && (
          <Welcome
            className="transition
            duration-150
            ease-in-out"
            setShowPage={setShowPage}
          />
        )}
        {showPage == 1 && (
          <>
            <Top setShowPage={setShowPage} />
            <Register setShowPage={setShowPage} />
          </>
        )}
      </div>
      <div className="mt-[30px] w-full">
        <div className="text-user-gray flex justify-center text-[16px]">
          <p className="">Powerd by</p>
          <p className="ml-[5px] font-bold">Custdelight</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
