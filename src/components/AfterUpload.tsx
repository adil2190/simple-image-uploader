import React, { useState } from "react";
import UploadWrapper from "./wrappers/UploadWrapper";
import correct from "../assets/correct.png";
import BlueButton from "./buttons/BlueButton";

type AfterUploadProps = {
  url: string;
};

function AfterUpload({ url }: AfterUploadProps) {
  const [isTextCopied, setIsTextCopied] = useState<Boolean>(false);

  const handleTextCopy = () => {
    navigator.clipboard.writeText(url);
    setIsTextCopied(true);
  };
  return (
    <UploadWrapper>
      <div className="my-4 mt-9 flex flex-col items-center ">
        <img src={correct} alt="check" className="h-[40px] w-[40px] mb-3" />
        <p className="font-[500] text-[18px]">Uploaded Successfully!</p>
      </div>
      <img
        src={url}
        alt="uploaded_img"
        className="h-[224.4px] w-[338px] object-cover rounded-lg"
      />
      <div className="w-[338px] mx-auto h-[50px] mt-5 relative">
        <BlueButton
          label={isTextCopied ? "Copied!" : "Copy Link"}
          classes="absolute top-[2px] right-[3px] h-[32px] text-[11px]"
          onClick={handleTextCopy}
        />
        <input
          type="text"
          className="w-full p-2 border-[#E0E0E0] border-solid border-[1px] rounded-lg outline-none text-[12px]"
          value={url}
        />
      </div>
    </UploadWrapper>
  );
}

export default AfterUpload;
