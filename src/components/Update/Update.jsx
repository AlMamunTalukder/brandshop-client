import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate();

  const car = useLoaderData();
  const { _id, name, BName, type, price, SDescription, rating, photo } = car;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const BName = form.BName.value;
    const type = form.type.value;
    const price = form.price.value;
    const SDescription = form.SDescription.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateCar = {
      name,
      BName,
      type,
      price,
      SDescription,
      rating,
      photo,
    };
    console.log(updateCar);

    fetch(`https://brand-shop-server-ivory.vercel.app/addProduct/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Car Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/brandCars");
            }
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-[#F3F4F0] min-h-screen">
        <form onSubmit={handleAddProduct}>
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
                    defaultValue={name}
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
                    defaultValue={BName}
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
                    defaultValue={type}
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
                    defaultValue={price}
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
                    defaultValue={SDescription}
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
                    defaultValue={rating}
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
                  defaultValue={photo}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
