import React, { useRef } from "react";
import AWS from "aws-sdk";

import Heading from "./text/Heading";
import Label from "./text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";
import DragFiles from "./DragFiles";
import GreyLabel from "./text/GreyLabel";
import BlueButton from "./buttons/BlueButton";

import { s3FileUpload } from "../services/s3Service";

type s3FileUploadResponse = {
  Location: string;
  Key: string;
  Bucket: string;
  key: string;
};

function BeforeUpload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  return (
    <UploadWrapper>
      <Heading>Upload your image</Heading>
      <Label>File shoud be Jpeg, Png...</Label>
      <DragFiles
        image={imagePreview}
        setImage={setImagePreview}
        imageFile={imageFile}
        setImageFile={setImageFile}
      />
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
            setImageFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex">
        <BlueButton
          label="Choose a file"
          onClick={(e) => {
            if (fileRef.current) fileRef.current.click();
          }}
        />
        {imagePreview && (
          <>
            <div className="w-[20px]" />
            <BlueButton
              label="+ Upload"
              onClick={async (e) => {
                if (imageFile) {
                  try {
                    const result: s3FileUploadResponse = await s3FileUpload(
                      imageFile
                    );
                    console.log(result.Location);
                  } catch (error) {
                    console.log(error);
                  }
                }
              }}
            />
          </>
        )}
      </div>
    </UploadWrapper>
  );
}

export default BeforeUpload;
