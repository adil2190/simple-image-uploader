import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: "us-west-2",
});

export const s3FileUpload = (file: File)  => {
  return new Promise<AWS.S3.ManagedUpload.SendData>((resolve, reject) => {
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
