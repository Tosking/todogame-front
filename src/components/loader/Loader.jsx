import React from "react";
import { MoonLoader } from "react-spinners";
import "./loader.css";
const Loader = () => {
  return (
    <div className="page-loader">
      <div className="page-loader-content">
        <h1>Loading...</h1>
        <MoonLoader size={50}></MoonLoader>
      </div>
    </div>
  );
};

export default Loader;
