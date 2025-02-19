import "./App.css";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomNavbar from "./components/Navbar";

import Footer from "./components/Footer";

function App() {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png, image/jpeg, image/webp",
    maxSize: 4 * 1024 * 1024, // 4MB
    onDrop: (acceptedFiles) => {
      setFile(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  return (
    <div>
      <CustomNavbar/>
      <h1 className="text-center mt-4">Welcome to My React App</h1>

      <div className="flex flex-col items-center p-6 space-y-4">
        <h1 className="text-2xl font-bold">Image Captioning</h1>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-96 text-center bg-gray-100 cursor-pointer"
        >
          <input {...getInputProps()} />
          <img
            src="https://img.icons8.com/ios/50/000000/image.png"
            alt="Upload Icon"
            className="mx-auto mb-2"
          />
          <p className="text-gray-600">Upload a photo or drag and drop</p>
          <p className="text-gray-400 text-sm">PNG, JPG, or WEBP up to 4MB</p>
        </div>

        {file && <img src={file} alt="Uploaded" className="rounded-lg w-64 mt-4" />}
        <button className="promptButton">Prompt</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
