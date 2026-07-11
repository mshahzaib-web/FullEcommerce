import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadImage, deleteImage } from "../../api/product";
import { MdDeleteForever } from "react-icons/md";

const Media = () => {
  const inputRef = useRef(null);
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
    },
  });
  console.log(image);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

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
                  <MdDeleteForever onClick={handleDelteBtn} color="#f23224" />
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

        {/* Existing Images */}
        <div className="grid grid-cols-3 gap-3">
          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop"
              alt="Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 p-1.5 bg-white rounded-full text-red-600 hover:bg-red-50 transition-all">
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

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=200&fit=crop"
              alt="Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 p-1.5 bg-white rounded-full text-red-600 hover:bg-red-50 transition-all">
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
          <button className="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all">
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
};

export default Media;
