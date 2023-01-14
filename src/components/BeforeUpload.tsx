import React from "react";
import Heading from "./Text/Heading";
import Label from "./Text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";

function BeforeUpload() {
  return (
    <UploadWrapper>
      <Heading>Upload your image</Heading>
      <Label>File shoud be Jpeg, Png...</Label>
    </UploadWrapper>
  );
}

export default BeforeUpload;
