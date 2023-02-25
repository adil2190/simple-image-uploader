import React, { useRef } from "react";
import AWS from "aws-sdk";

// @ts-ignore
import Heading from "./text/Heading";
import Label from "./text/Label";
import UploadWrapper from "./wrappers/UploadWrapper";
import DragFiles from "./DragFiles";
import GreyLabel from "./text/GreyLabel";
import BlueButton from "./buttons/BlueButton";

import { s3FileUpload } from "../services/s3Service";

type BeforeUploadProps = {
  setIsUploading: React.Dispatch<React.SetStateAction<Boolean>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

function BeforeUpload({ setIsUploading, setUrl }: BeforeUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const handleUpload = async () => {
    if (imageFile) {
      try {
        setIsUploading(true);
        const result: AWS.S3.ManagedUpload.SendData = await s3FileUpload(
          imageFile
        );
        setUrl(result.Location);
      } catch (error) {
        console.log(error);
      } finally {
        setIsUploading(false);
      }
    }
  };

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
            <BlueButton label="+ Upload" onClick={handleUpload} />
          </>
        )}
      </div>
    </UploadWrapper>
  );
}

export default BeforeUpload;
