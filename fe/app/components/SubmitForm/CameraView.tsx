"use client";
import React, { useRef, useEffect, useState } from "react";

const CameraView = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [height, setHeight] = useState<number>(30);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError((err as Error).message);
      }
    };

    getUserMedia();
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const newHeight = (e.clientY / window.innerHeight) * 100;
    if (newHeight > 5 && newHeight < 100) {
      setHeight(newHeight);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    console.log("down");
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{ height: `${height}vh` }}
      className="h-60 -200 flex flex-col justify-center items-center"
    >
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : (
        <video ref={videoRef} autoPlay className="h-full"></video>
      )}

      <div
        onMouseDown={handleMouseDown}
        className="w-full h-1 cursor-row-resize bg-blue-500"
      ></div>
    </div>
  );
};

export default CameraView;
