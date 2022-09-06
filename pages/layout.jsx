import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Welcome from "./welcome";

const Layout = () => {
  return (
    <div className="w-[400px] h-[601px] rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] tracking-[-0.5px]">
      <Welcome />
      <div className="absolute top-[631px] w-full">
        <div className="text-user-gray flex justify-center text-[16px]">
          <p className="">Powerd by</p>
          <p className="ml-[5px] font-bold">Custdelight</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
