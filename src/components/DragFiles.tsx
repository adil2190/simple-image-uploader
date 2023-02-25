import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Placeholder from "../assets/upload_placeholder.svg";
import Cancel from "../assets/cancel.svg";
import GreyLabel from "./text/GreyLabel";

type DragFilesProps = {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
  imageFile: File | null;
  setImageFile: Dispatch<SetStateAction<File | null>>;
};

function DragFiles({
  image,
  setImage,
  imageFile,
  setImageFile,
}: DragFilesProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
    setImageFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
    multiple: false,
  });

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
