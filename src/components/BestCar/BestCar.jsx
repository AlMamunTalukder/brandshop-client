const BestCar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/n8b8jRG/bg.jpg)" }}
      >
        <div className="items-center">
          <h3 className="text-3xl font-bold text-white  py-4">
            Find Your Exclusive Car here.
          </h3>
          <div className="">
            <div className="bg-base-100 justify-end max-w-screen-xl">
              <form className="card-body  w-auto lg:w-96">
                <div className="">
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Your Brand
                    </option>
                    <option>Toyota</option>
                    <option>BMW</option>
                    <option>Nissan</option>
                  </select>
                </div>
                <div className="">
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Select Car Type
                    </option>
                    <option>Sports</option>
                    <option>Racing</option>
                  </select>
                </div>
                <div className="form-control">
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Price
                    </option>
                    <option>$500000</option>
                    <option>$300000</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Find Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCar;
