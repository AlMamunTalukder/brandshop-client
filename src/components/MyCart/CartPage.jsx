import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const handleDelete = () => {
    // Implement a function to delete the item from the cart and update the server
    // After deletion, you can fetch the updated cart data from the server and update the state
  };

  useEffect(() => {
    fetch("/getCartData")
      .then((response) => response.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div>
      <h1>My Cart</h1>
      <Cart cart={cart} onDelete={handleDelete} />
    </div>
  );
};

export default CartPage;
