import "./UploadBox.css"
import React, { useState } from 'react'
import UploadItem from "../UploadItem/UploadItem"
import { IoCloudUploadSharp } from "react-icons/io5";

function UploadBox() {
  const [files, setFiles] = useState([
    { title: "Messi.psd", volume: "120 Mb", progressPercent: 100 },
    { title: "Barcelona.psd", volume: "80 MB", progressPercent: 70 },
    { title: "Argentina.psd", volume: "75 MB", progressPercent: 40 },
  ]);

  return (
    <div className="upload-box-container">
      <h2>Upload</h2>
      {files.map(file => {
        return <UploadItem {...file} key={file.title} />
      })}
      <label htmlFor="upload-element">
        <IoCloudUploadSharp />
      </label>
      <input type="file" name="" id="upload-element" />
    </div>
  )
}

export default UploadBox