const VarityofCars = () => {
  return (
    <div>
      <div className="bg-[#fff] mt-24">
        <div className="mb-16">
          <h2 className="text-black font-bold mb-5 text-5xl">
            VARIETY OF CARS
          </h2>
          <span className="text-[#23262d] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </span>
        </div>

        <div className="mb-10">
          <div className="text-center grid lg:grid-cols-3 gap-4 mb-8  ">
            <div className="pt-8">
              <figure className="h-30 w-full">
                <img src="https://i.ibb.co/5rZYQNW/car-img1.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                Hundai
              </h3>
            </div>

            <div className="pt-8">
              <figure className="h-30 w-full">
                <img src="https://i.ibb.co/pz5GTjx/car-img2.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                Audi
              </h3>
            </div>

            <div className="pt-8">
              <figure className="h-30 w-full">
                <img src="https://i.ibb.co/Yd2hnjB/car-img3.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                BMW
              </h3>
            </div>
          </div>
        </div>
        <div className="gap-y-12">
          <div className="text-center grid lg:grid-cols-3 gap-4">
            <div className="pt-8">
              <figure className="h-30 mt-[11px] w-full">
                <img src="https://i.ibb.co/pXLm155/image.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                Toyota
              </h3>
            </div>

            <div className="pt-8">
              <figure className="h-30 mt-3 w-full">
                <img src="https://i.ibb.co/44xRxY0/image.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                Lamborghini
              </h3>
            </div>

            <div className="pt-8">
              <figure className="h-30 mt-[22px] w-full">
                <img src="https://i.ibb.co/tm4YrZV/image.png" alt="#" />
              </figure>
              <h3 className="text-black bg-yellow-300 font-bold text-4xl h-20 text-center justify-center pt-5 mt-8">
                Nissan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarityofCars;
