/* eslint-disable react/prop-types */
const Details = ({ car }) => {
  const { _id, name, BName, type, price, SDescription, rating, photo } =
    car || {};

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img src={photo} alt="Album" />

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand: {BName}</p>
          <p>Price: {price}</p>
          <p>Car Type: {type}</p>
          <p>Rating: {rating}</p>
          <br />
          <p>{SDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
