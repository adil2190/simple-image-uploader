import React, { useState } from "react";
import BeforeUpload from "./components/BeforeUpload";
import BarLoader from "./components/loaders/BarLoader";
import Uploading from "./components/Uploading";
import AfterUpload from "./components/AfterUpload";

function App() {
  const [url, setUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState<Boolean>(false);
  return (
    <div className="bg-[#fafafa] h-screen w-screen flex items-center justify-center">
      {!url && !isUploading && (
        <BeforeUpload setIsUploading={setIsUploading} setUrl={setUrl} />
      )}
      {isUploading && <Uploading />}
      {url && !isUploading && <AfterUpload url={url} />}
    </div>
  );
}

export default App;
