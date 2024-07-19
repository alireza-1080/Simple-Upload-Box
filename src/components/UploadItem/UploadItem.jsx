import "./UploadItem.css"
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function UploadItem({ title, volume, progressPercent}) {
  const [isUploadCompleted, setIsUploadCompleted] = useState(false)

  const barProgressItemRef = useRef(null);

  useEffect(() => {
    const barProgressItem = barProgressItemRef.current;
    if (barProgressItem) {
      barProgressItem.style.width = `${progressPercent}%`
    }
  }, [barProgressItemRef])

  return (
    <div className="upload-item-container">
      <img src="./images/psd.PNG" alt="psd logo" />
      <h3>{title}</h3>
      <h4>{volume}</h4>
      {progressPercent === 100 ? <FaCheck className="icon check"/> : <FaXmark className="icon cancel"/>}
      {progressPercent !== 100 && <div className="progress-container">
        <div className="progress-bar" ref={barProgressItemRef}></div>
      </div>}
    </div>
  )
}

export default UploadItem