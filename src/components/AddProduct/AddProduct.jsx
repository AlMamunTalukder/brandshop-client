const AddProduct = () => {
  return (
    <div>
      <div className="bg-[#F3F4F0] min-h-screen">
        <form>
          <div className="container mx-auto p-4">
            <div className="w-full max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="BName"
                    name="BName"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Type
                  </label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Short Description
                  </label>
                  <input
                    type="text"
                    id="SDescription"
                    name="SDescription"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating
                  </label>
                  <input
                    type="text"
                    id="rating"
                    name="rating"
                    placeholder="write only number like- 2, 3, 4"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Photo
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
