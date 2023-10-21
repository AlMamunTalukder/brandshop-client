/* eslint-disable react/prop-types */

import MyCart from "./MyCart";

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((car) => (
        <MyCart key={car._id} car={car} />
      ))}
    </div>
  );
};

export default Cart;
