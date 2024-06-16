import React, { useState } from "react";

interface Image {
  id: string;
  url: string | ArrayBuffer | null;
}

const ImagesInput = () => {
  const [images, setImages] = useState<Image[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) => {
        const id = URL.createObjectURL(file);
        return {
          id,
          url: URL.createObjectURL(file),
        };
      });
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((image) => (
          <div key={image.id} style={{ position: "relative" }}>
            <img
              src={image.url as string}
              alt="Uploaded"
              style={{ width: "100%", height: "auto" }}
            />
            <button
              onClick={() => handleRemoveImage(image.id)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesInput;
