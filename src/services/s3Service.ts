import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: "test",
  secretAccessKey: "test",
  region: "us-west-2",
});

type s3FileUploadResponse = {
  Location: string;
  Key: string;
  Bucket: string;
  key: string;
};

export const s3FileUpload = (file: File)  => {
  return new Promise<s3FileUploadResponse>((resolve, reject) => {
    const params = {
      Bucket: "mirzaadil",
      Key: file.name,
      Body: file,
    };

    s3.upload(params, (err: Error, data:AWS.S3.ManagedUpload.SendData) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
