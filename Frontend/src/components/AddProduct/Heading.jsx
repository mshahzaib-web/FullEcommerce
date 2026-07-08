export default function Heading() {
  return (
    <>
      <div className="bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="hidden lg:block max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-gray-600">
            <ol className="flex items-center space-x-2">
              <li className="hover:text-indigo-600 cursor-pointer">
                Dashboard
              </li>
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

          {/* Main Content Grid */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
          {/* Left Column - Main Forms */}
          {/* <div className="lg:col-span-2 space-y-6">
            <GeneralInformation />
            <Pricing />
            <Inventory />
            <Variants />
          </div> */}

          {/* Right Column - Media */}
          {/* <div className="lg:col-span-1">
            <Media />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
