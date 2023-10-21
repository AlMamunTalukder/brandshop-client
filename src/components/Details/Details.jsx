import { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "./../Hook/AuthProvider";

/* eslint-disable react/prop-types */
const Details = ({ car }) => {
  const { user } = useContext(AuthContext) || {};
  const email = user.email;
  console.log(email);

  const { name, BName, type, price, SDescription, rating, photo } = car || {};

  console.log(user);

  const addToCart = () => {
    const carCart = {
      name,
      BName,
      type,
      price,
      SDescription,
      rating,
      photo,
      email,
    };

    fetch("https://brand-shop-server-ivory.vercel.app/getCartData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carCart),
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
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
