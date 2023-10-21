/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const data = useLoaderData();

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
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
