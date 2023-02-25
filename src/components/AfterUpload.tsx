import React from "react";
import UploadWrapper from "./wrappers/UploadWrapper";
import correct from "../assets/correct.png";
import BlueButton from "./buttons/BlueButton";

function AfterUpload() {
  return (
    <UploadWrapper>
      <div className="my-4 mt-9 flex flex-col items-center ">
        <img src={correct} alt="check" className="h-[40px] w-[40px] mb-3" />
        <p className="font-[500] text-[18px]">Uploaded Successfully!</p>
      </div>
      <img
        src="https://mirzaadil.s3.us-west-2.amazonaws.com/Mirza_Adil_Batman_vs_Bruce_Wayne_a9fffffc-4870-4f42-81fc-be1dc3a01b79%20%283%29.png"
        alt="uploaded_img"
        className="h-[224.4px] w-[338px] object-cover rounded-lg"
      />
      <div className="w-[338px] mx-auto h-[50px] mt-5 relative">
        <BlueButton label="Copy Link" classes="absolute right-0" />
        <input
          type="text"
          className="w-full p-2 border-[#E0E0E0] border-solid border-[1px] rounded-lg outline-none text-[12px]"
          value={
            "https://mirzaadil.s3.us-west-2.amazonaws.com/Mirza_Adil_Batman_vs_Bruce_Wayne_a9fffffc-4870-4f42-81fc-be1dc3a01b79%20%283%29.png"
          }
        />
      </div>
    </UploadWrapper>
  );
}

export default AfterUpload;
