/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AllCarsCards = ({ car }) => {
  const { _id, name, BName, type, price, rating, photo } = car;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-60">
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Name: {name}</h2>
          <p>Brand Name: {BName}</p>
          <p>Car Type: {type}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/carDetails/${_id}`}>
              <button className="btn">Details</button>
            </Link>
            <Link to="/carUpdate">
              <button className="btn">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsCards;
