import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Details = ({ car }) => {
  const { name, BName, type, price, SDescription, rating, photo } = car || {};

  const addToCart = ({ cart }) => {
    fetch("https://brand-shop-server-ivory.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Items added to the cart:", data.message);
        } else {
          console.error("Error adding items to the cart:", data.error);
        }
      });

    Swal.fire({
      title: "Success!",
      text: "Car added to the cart",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="w-[500px] h-60 ">
          <img src={photo} alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand: {BName}</p>
          <p>Price: {price}</p>
          <p>Car Type: {type}</p>
          <p>Rating: {rating}</p>
          <br />
          <p>{SDescription}</p>
          <div className="card-actions justify-end">
            <Link to={"/addToCart"}>
              <button className="btn btn-primary" onClick={addToCart}>
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
