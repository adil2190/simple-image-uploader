import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Placeholder from "../assets/upload_placeholder.svg";
import GreyLabel from "./text/GreyLabel";

function DragFiles() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="w-[80%] h-[218px] bg-lightBlue rounded-[12px]
        border-dashed border-[1px] border-blue-500 cursor-pointer
        flex flex-col items-center justify-center
      "
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <img src={Placeholder} alt="placeholder" />
      <GreyLabel>Drag & Drop your image here</GreyLabel>
    </div>
  );
}

export default DragFiles;
