import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Placeholder from "../assets/upload_placeholder.svg";
import Cancel from "../assets/cancel.svg";
import GreyLabel from "./text/GreyLabel";

type DragFilesProps = {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
};

function DragFiles({ image, setImage }: DragFilesProps) {
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
      <div className="relative">
        {image && (
          <img
            src={Cancel}
            alt="cancel"
            className="h-[25px] absolute -top-3 -right-3"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
            }}
          />
        )}
        <img
          src={image || Placeholder}
          className={image ? `h-[100px] w-[100px]` : ""}
          alt="placeholder"
        />
      </div>
      <GreyLabel>Drag & Drop your image here</GreyLabel>
    </div>
  );
}

export default DragFiles;
