import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCarsCards from "./AllCarsCards";
import Slider from "../Slider/Slider";

const BrandCars = () => {
  const loadedCars = useLoaderData();

  const [cars, setCars] = useState(loadedCars);

  return (
    <div className="m-20">
      <Slider />
      <div className="grid md:grid-cols-2 gap-4">
        {cars.map((car) => (
          <AllCarsCards
            key={car._id}
            car={car}
            cars={cars}
            setCars={setCars}
          ></AllCarsCards>
        ))}
      </div>
    </div>
  );
};

export default BrandCars;
