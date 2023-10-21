/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
const MyCart = () => {
  // const { name, BName, type, price, SDescription, rating, photo } = car || {};
  const data = useLoaderData();
  console.log(data);
  return <div></div>;
};

export default MyCart;
