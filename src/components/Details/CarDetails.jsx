import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const CarDetails = () => {
  const loadedCars = useLoaderData();
  console.log(loadedCars);

  return (
    <div>
      <Details car={loadedCars}></Details>
    </div>
  );
};

export default CarDetails;
