import React from "react";
import BeforeUpload from "./components/BeforeUpload";
import BarLoader from "./components/loaders/BarLoader";
import Uploading from "./components/Uploading";

function App() {
  return (
    <div className="bg-[#fafafa] h-screen w-screen flex items-center justify-center">
      <BeforeUpload />
      {/* <Uploading /> */}
    </div>
  );
}

export default App;
