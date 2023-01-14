import React from "react";
import Heading from "./text/Heading";
import Label from "./text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";
import DragFiles from "./DragFiles";
import GreyLabel from "./text/GreyLabel";
import BlueButton from "./buttons/BlueButton";

function BeforeUpload() {
  return (
    <UploadWrapper>
      <Heading>Upload your image</Heading>
      <Label>File shoud be Jpeg, Png...</Label>
      <DragFiles />
      <GreyLabel>Or</GreyLabel>
      <div className="mt-[20px]" />
      <BlueButton
        label="Choose a file"
        onClick={(e) => {
          console.log(e);
        }}
      />
    </UploadWrapper>
  );
}

export default BeforeUpload;
