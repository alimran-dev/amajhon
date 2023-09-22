import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleMenuIcon = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center shadow-md py-5 px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-800">Amajhon</h1>
      <div onClick={handleMenuIcon} className="text-2xl lg:hidden">
        {isOpen ? <IoClose></IoClose> : <HiMenu></HiMenu>}
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center gap-1 lg:gap-3 font-semibold absolute lg:static bg-white border border-gray-700 rounded-md p-2 ${isOpen ? "right-10 top-16 duration-1000 lg:duration-0":"-top-96"}`}>
        <NavLink to="/" className="px-2 lg:px-4 lg:py-2 border border-gray-700 rounded-md">
          Home
        </NavLink>
        <NavLink to="/products" className="px-2 lg:px-4 lg:py-2 border border-gray-700 rounded-md">
          Products
        </NavLink>
        <NavLink to="/dashboard" className="px-2 lg:px-4 lg:py-2 border border-gray-700 rounded-md">
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
