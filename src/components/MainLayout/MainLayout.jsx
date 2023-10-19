import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div className="py-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
