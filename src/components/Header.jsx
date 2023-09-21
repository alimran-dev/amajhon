import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md py-5 px-20">
      <h1 className="text-3xl font-bold text-gray-800">Amajhon</h1>
      <div className="flex items-center font-semibold">
        <NavLink to="/" className="px-4">Home</NavLink>
        <NavLink to="/products" className="px-4">Products</NavLink>
        <NavLink to="/dashboard" className="px-4">Dashboard</NavLink>
      </div>
    </div>
  );
};

export default Header;
