import React, { useRef } from "react";
import Heading from "./text/Heading";
import Label from "./text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";
import DragFiles from "./DragFiles";
import GreyLabel from "./text/GreyLabel";
import BlueButton from "./buttons/BlueButton";

function BeforeUpload() {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <UploadWrapper>
      <Heading>Upload your image</Heading>
      <Label>File shoud be Jpeg, Png...</Label>
      <DragFiles />
      <GreyLabel>Or</GreyLabel>
      <div className="mt-[20px]" />
      <input type="file" className="hidden" ref={fileRef} />
      <BlueButton
        label="Choose a file"
        onClick={(e) => {
          if (fileRef.current) fileRef.current.click();
        }}
      />
    </UploadWrapper>
  );
}

export default BeforeUpload;
