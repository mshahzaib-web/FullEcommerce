import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadImage, deleteImage } from "../../api/product";
import { MdDeleteForever } from "react-icons/md";

const Media = () => {
  const inputRef = useRef(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [image, setImage] = useState({ url: null, public_id: null });

  const divClickHandle = () => {
    if (image.url == null) {
      inputRef.current.click();
    }
  };

  const imageMutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => {
      // console.log(data);
      // console.log(data.image);
      setImage(data.image);
      setIsUploadingImage(false);
    },
  });
  console.log(image);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    setIsUploadingImage(true);

    const formData = new FormData();
    formData.append("image", file);

    imageMutation.mutate(formData);
  };

  const deleteMutation = useMutation({
    mutationFn: deleteImage,
    onSuccess: (data) => {
      setImage({ url: null, public_id: null });
      alert(data.message);
    },
  });

  const handleDelteBtn = () => {
    deleteMutation.mutate(image);
  };

  return (
    <>
      <div className=" lg:hidden max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li className="hover:text-indigo-600 cursor-pointer">Dashboard</li>
            <li>/</li>
            <li className="hover:text-indigo-600 cursor-pointer">Products</li>
            <li>/</li>
            <li className="text-indigo-600 font-medium">Add New</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Add New Product
          </h1>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-900">Media</h2>
        </div>
        {isUploadingImage ? (
          <div className="flex flex-col items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-indigo-600 mb-3"
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
            <p className="text-gray-700 font-medium text-sm">
              Uploading image...
            </p>
          </div>
        ) : (
          <>
            {/* Upload Area */}
            <input
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              type="file"
              ref={inputRef}
            />
            <div
              onClick={divClickHandle}
              className="border-2 border-dashed border-gray-300 rounded-xl py-2  text-center hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer mb-6"
            >
              {image.url != null ? (
                <div className="relative group">
                  <img
                    className="object-cover w-full h-full"
                    src={image.url}
                    alt=""
                  />
                  <div className="hidden  group-hover:flex absolute inset-0  justify-center items-center">
                    <div className="flex justify-center items-center w-8 h-8 bg-amber-500 rounded-full">
                      <MdDeleteForever
                        onClick={handleDelteBtn}
                        color="#f23224"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 mx-auto mb-3 text-indigo-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">
                    Click or drag to upload
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG, up to 10MB</p>
                </>
              )}
            </div>
          </>
        )}

        {/* Existing Images */}
      </div>
    </>
  );
};

export default Media;
