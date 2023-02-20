import React, { useRef } from "react";
import Heading from "./text/Heading";
import Label from "./text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";
import DragFiles from "./DragFiles";
import GreyLabel from "./text/GreyLabel";
import BlueButton from "./buttons/BlueButton";

function BeforeUpload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  return (
    <UploadWrapper>
      <Heading>Upload your image</Heading>
      <Label>File shoud be Jpeg, Png...</Label>
      <DragFiles image={imagePreview} setImage={setImagePreview} />
      <GreyLabel>Or</GreyLabel>
      <div className="mt-[20px]" />
      <input
        type="file"
        className="hidden"
        accept="image/png, image/gif, image/jpeg"
        ref={fileRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />
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
