import React from "react";

type UploadWrapperProps = {
  children?: React.ReactNode;
};

function UploadWrapper({ children }: UploadWrapperProps) {
  return (
    <div
      className="w-[402px] h-[469px] bg-white 
    shadow-md rounded-[12px] flex 
    flex-col items-center"
    >
      {children}
    </div>
  );
}

export default UploadWrapper;
