import { storage } from "../utils/firebaseConfigs";
import { randString } from "../utils";

type uploadFile = {
  uploadPath: string;
  file: File;
  fileName?: string;
  metadata?: object;
};

type uploadFiles = {
  uploadPath: string;
  files: File[];
  fileNames?: string[];
  resizeFieldPaths?: string[];
};
const getExtenstionFromPath = (path: string) =>
  path.substr(path.lastIndexOf(".") + 1);

const generateFileName = (filePath: string, prefix = "") =>
  prefix + randString(8) + "." + getExtenstionFromPath(filePath);

export const upload_file = (
  {
    uploadPath,
    file,
    fileName = generateFileName(file.name),
    metadata,
  }: uploadFile,
  progressCallback = (percent: number) => {}
) => {
  return new Promise((res, rej) => {
    if (uploadPath[uploadPath.length - 1] !== "/") uploadPath += "/";

    const ref = storage().ref(uploadPath + fileName);
    const task = ref.put(
      file,
      typeof metadata === "object" ? metadata : undefined
    );
    task.on("state_changed", (snap) =>
      progressCallback((snap.bytesTransferred / snap.totalBytes) * 100)
    );
    task
      .then(() => ref.getDownloadURL().then((url) => res(url)))
      .catch((e) => rej(e));
  });
};

export const upload = (
  { uploadPath, files, fileNames = [], resizeFieldPaths = [] }: uploadFiles,
  progressCallback = (percent: number) => {}
) => {
  const total = files.length;
  let progress = Array(total).fill(0);

  const metadatas = resizeFieldPaths.map((path) => ({
    customMetadata: { resize: "true", docfieldPath: path },
  }));

  return Promise.all(
    files.map((file, i) =>
      upload_file(
        {
          uploadPath,
          file,
          fileName: fileNames[i],
          metadata: metadatas[i],
        },
        (p) => {
          progress[i] = p;
          progressCallback(
            Math.round(progress.reduce((prev, curr) => prev + curr) / total)
          );
        }
      )
    )
  );
};

const Storage = {
  upload,
};

export default Storage;
