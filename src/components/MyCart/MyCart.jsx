/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = ({ car }) => {
  const data = useLoaderData();
  const { _id, name, BName, type, price, SDescription, rating, photo } =
    car || {};

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-ivory.vercel.app/addProduct/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            // const remaining = cars.filter((car) => car._id !== _id);
            // setCars(remaining);
          });
      }
    });
  };
  return (
    <div>
      {data.map((item) => (
        <div className="card lg:card-side bg-base-100 shadow-xl" key={item.id}>
          <div className="w-[500px] h-60">
            <img src={item.photo} alt="Car" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>Brand: {item.BName}</p>
            <p>Price: {item.price}</p>
            <p>Car Type: {item.type}</p>
            <p>Rating: {item.rating}</p>
            <br />
            <p>{item.SDescription}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
