import React from "react";
import BarLoader from "./loaders/BarLoader";

function Uploading() {
  return (
    <div className="w-[400px] h-[144px] shadow-lg rounded-[12px] p-[30px] flex flex-col items-start justify-center">
      <p className="mb-[20px]">Uploading ...</p>
      <BarLoader />
    </div>
  );
}

export default Uploading;
