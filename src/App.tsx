import React from "react";
import BeforeUpload from "./components/BeforeUpload";
import BarLoader from "./components/loaders/BarLoader";
import Uploading from "./components/Uploading";
import AfterUpload from "./components/AfterUpload";

function App() {
  return (
    <div className="bg-[#fafafa] h-screen w-screen flex items-center justify-center">
      {/* <BeforeUpload /> */}
      {/* <Uploading /> */}
      <AfterUpload />
    </div>
  );
}

export default App;
