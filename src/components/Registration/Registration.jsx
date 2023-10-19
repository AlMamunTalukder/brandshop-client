import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold">Register now!</h1>

          <div className="card flex-shrink-0 w-[420px] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="img"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text " required>
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral" type="submit">
                  Register
                </button>
              </div>
              <label className="label">
                Have an account?
                <Link to="/signIn" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
