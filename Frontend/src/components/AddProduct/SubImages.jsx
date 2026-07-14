import { useRef, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadSubImages, deleteSubImage } from "../../api/product";

export default function SubImages({ sendData }) {
  const inputRef = useRef(null);
  const [isUploadingSubImages, setIsUploadingSubImages] = useState(false);
  const [subImages, setSubImages] = useState([]);

  useEffect(() => {
    sendData(subImages);
  }, [subImages, sendData]);

  const divClickHandle = () => {
    inputRef.current.click();
  };

  const subImagesMutation = useMutation({
    mutationFn: uploadSubImages,
    onSuccess: (data) => {
      console.log(data.subImageDetails);

      setSubImages((prevSubImages) => [
        ...prevSubImages,
        ...data.subImageDetails,
      ]);
      setIsUploadingSubImages(false);
      console.log(subImages);
    },
  });

  const handleSubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);

    const formData = new FormData();

    if (subImages.length >= 5 || files.length >= 6) {
      return alert("Max Upload image upto 5");
    } else {
      setIsUploadingSubImages(true);
      files.forEach((file) => {
        formData.append("subImages", file);
      });
    }
    subImagesMutation.mutate(formData);
    console.log(formData);
  };

  const deleteSubImageMutation = useMutation({
    mutationFn: deleteSubImage,
    onSuccess: (data) => {
      console.log(data.public_id);
      setSubImages((prevSubImages) =>
        prevSubImages.filter(
          (subImage) => subImage.public_id !== data.public_id,
        ),
      );
    },
  });

  const handleDeleteSubImage = (subImage) => {
    deleteSubImageMutation.mutate(subImage);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-3 justify-items-center">
        {subImages.map((subImage) => (
          <div
            key={subImage.public_id}
            className="w-14 h-14 relative aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={subImage.url}
              alt="Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
              <button
                onClick={() => handleDeleteSubImage(subImage)}
                className="opacity-0 group-hover:opacity-100 p-1.5 bg-white rounded-full text-red-600 hover:bg-red-50 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* 🌟 LOADING STATE SKELETON: Shows up when isUploading is true */}
        {isUploadingSubImages && (
          <div className="w-14 h-14 aspect-square rounded-lg bg-gray-100 animate-pulse flex items-center justify-center border border-gray-200">
            <svg
              className="animate-spin h-5 w-5 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}

        <input
          onChange={handleSubImagesChange}
          accept="image/*"
          multiple
          className="hidden"
          type="file"
          ref={inputRef}
        />
        <div onClick={divClickHandle}>
          <button className=" w-14 h-14 aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
