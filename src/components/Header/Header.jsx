import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="space-y-5">
      <Navbar></Navbar>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/VgnvXgb/banner.jpg)",
          }}
        >
          <div className=""></div>
          <div className=" text-center text-white">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Find best car Here For Buy
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="join ">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item
                       w-auto
                       lg:w-96"
                      placeholder="Search"
                    />
                  </div>
                </div>

                <div className="indicator">
                  <button className="btn join-item bg-yellow-300 text-black hover:text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
